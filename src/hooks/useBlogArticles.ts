/**
 * useBlogArticles – Custom React hook that fetches blog articles
 * from the Vercel serverless function (/api/blog) and merges them
 * with static content from blogData.ts.
 *
 * Strategy:
 *  - Notion table provides metadata (title, slug, summary, date, etc.)
 *    and the "Publicado" toggle to control visibility.
 *  - Static blogData.ts provides the full article content[].
 *  - Articles are matched by slug (id).
 *  - If Notion is unreachable, falls back to the static data.
 */

import { useState, useEffect, useRef } from "react";
import { BlogArticle, BLOG_ARTICLES } from "../data/blogData";

export interface NotionArticleMeta {
  titulo: string;
  slug: string;
  resumen: string;
  fecha: string;
  autor: string;
  tiempoLectura: string;
  publicado: boolean;
}

interface UseBlogArticlesResult {
  articles: BlogArticle[];
  loading: boolean;
  error: string | null;
  isNotion: boolean; // true if data came from Notion
}

const API_URL = "/api/blog";

export function useBlogArticles(): UseBlogArticlesResult {
  const [articles, setArticles] = useState<BlogArticle[]>(BLOG_ARTICLES);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isNotion, setIsNotion] = useState(false);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

    (async () => {
      try {
        const res = await fetch(API_URL, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        const notionArticles: NotionArticleMeta[] = data.articles ?? [];

        if (notionArticles.length === 0) {
          // Notion table is empty → show static articles
          setArticles(BLOG_ARTICLES);
          setIsNotion(false);
          setLoading(false);
          return;
        }

        // Merge: for each Notion row that is "Publicado", find matching static
        // content by slug, or create a metadata-only card if no static match.
        const merged: BlogArticle[] = [];

        for (const na of notionArticles) {
          if (!na.publicado) continue; // skip unpublished

          const staticMatch = BLOG_ARTICLES.find((a) => a.id === na.slug);

          if (staticMatch) {
            // Notion metadata overrides static metadata
            merged.push({
              ...staticMatch,
              title: na.titulo || staticMatch.title,
              excerpt: na.resumen || staticMatch.excerpt,
              date: na.fecha || staticMatch.date,
              readTime: na.tiempoLectura || staticMatch.readTime,
            });
          } else {
            // Article only exists in Notion (no full content yet)
            merged.push({
              id: na.slug,
              title: na.titulo,
              excerpt: na.resumen,
              category: "Blog",
              date: na.fecha,
              readTime: na.tiempoLectura,
              image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=1200&q=80",
              content: [
                {
                  type: "intro",
                  text: na.resumen,
                },
              ],
            });
          }
        }

        // Also include static articles whose slugs aren't in Notion
        // (backwards-compatible: existing articles keep showing)
        const notionSlugs = new Set(notionArticles.map((na) => na.slug));
        for (const sa of BLOG_ARTICLES) {
          if (!notionSlugs.has(sa.id)) {
            merged.push(sa);
          }
        }

        setArticles(merged.length > 0 ? merged : BLOG_ARTICLES);
        setIsNotion(true);
        setLoading(false);
      } catch (err: any) {
        clearTimeout(timeoutId);
        console.warn("[useBlogArticles] Notion fetch failed, using static data:", err.message);
        setArticles(BLOG_ARTICLES);
        setError(err.message);
        setIsNotion(false);
        setLoading(false);
      }
    })();

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return { articles, loading, error, isNotion };
}
