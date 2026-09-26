/**
 * Vercel Serverless Function – /api/blog
 *
 * Reads blog article metadata from a Notion table block and returns
 * it as JSON.  The Notion API key is kept server-side so it is never
 * exposed to the browser.
 *
 * Environment variables (set in Vercel dashboard):
 *   NOTION_API_KEY  – Notion integration token
 *
 * Notion IDs (hard-coded because they won't change):
 *   TABLE_BLOCK_ID  – The inline table inside the "Blog Bedtime Journey" page
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";

/* ── Notion IDs ───────────────────────────────────────────────── */
const TABLE_BLOCK_ID = "3e7ec958-9206-805e-aafe-cfdf7bd90899";
const NOTION_API_VERSION = "2022-06-28";

/* ── Types ────────────────────────────────────────────────────── */
interface NotionRichText {
  plain_text: string;
}

interface NotionTableRow {
  type: "table_row";
  table_row: { cells: NotionRichText[][] };
}

export interface NotionBlogArticle {
  titulo: string;
  slug: string;
  resumen: string;
  fecha: string;
  autor: string;
  tiempoLectura: string;
  publicado: boolean;
}

/* ── Helpers ──────────────────────────────────────────────────── */
function cellText(cells: NotionRichText[][], index: number): string {
  const cell = cells[index];
  if (!cell || cell.length === 0) return "";
  return cell.map((rt) => rt.plain_text).join("");
}

function parseRow(cells: NotionRichText[][]): NotionBlogArticle {
  const publicadoRaw = cellText(cells, 6).toLowerCase().trim();
  return {
    titulo: cellText(cells, 0),
    slug: cellText(cells, 1),
    resumen: cellText(cells, 2),
    fecha: cellText(cells, 3),
    autor: cellText(cells, 4),
    tiempoLectura: cellText(cells, 5),
    publicado: publicadoRaw === "sí" || publicadoRaw === "si" || publicadoRaw === "true" || publicadoRaw === "yes" || publicadoRaw === "x" || publicadoRaw === "✓",
  };
}

/* ── Handler ──────────────────────────────────────────────────── */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers so the SPA can call this endpoint
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  if (!NOTION_API_KEY) {
    return res.status(500).json({ error: "NOTION_API_KEY not configured" });
  }

  try {
    // Fetch all children (table_row blocks) from the Notion table
    const response = await fetch(
      `https://api.notion.com/v1/blocks/${TABLE_BLOCK_ID}/children?page_size=100`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          "Notion-Version": NOTION_API_VERSION,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Notion API error:", response.status, errorText);
      return res.status(response.status).json({
        error: "Notion API error",
        status: response.status,
        detail: errorText,
      });
    }

    const data = await response.json();
    const rows: NotionTableRow[] = data.results?.filter(
      (block: any) => block.type === "table_row"
    ) ?? [];

    // First row is the header → skip it
    const dataRows = rows.slice(1);

    const articles: NotionBlogArticle[] = dataRows
      .map((row) => parseRow(row.table_row.cells))
      .filter((a) => a.titulo.trim() !== "" && a.slug.trim() !== "");

    return res.status(200).json({ articles });
  } catch (err: any) {
    console.error("Serverless function error:", err);
    return res.status(500).json({ error: err.message ?? "Unknown error" });
  }
}
