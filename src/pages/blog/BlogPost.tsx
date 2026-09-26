import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Moon, Clock, Calendar, Instagram, Facebook, Mail } from "lucide-react";
import { BLOG_ARTICLES, BlogContent } from "../../data/blogData";

const LOGO_CREMA = "/images/logo-crema.svg";

/* ── helpers ── */
function ContentBlock({ block }: { block: BlogContent }) {
  switch (block.type) {
    case "intro":
      return (
        <p style={{
          fontFamily: "Lato, sans-serif", fontSize: 20, lineHeight: 1.85,
          color: "#2E2E3A", fontWeight: 400, marginBottom: 28,
        }}>
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h2 style={{
          fontFamily: "'Loubag', serif", fontSize: "clamp(22px, 3vw, 32px)",
          fontWeight: 400, color: "#7259A3", lineHeight: 1.3,
          marginTop: 52, marginBottom: 20,
        }}>
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p style={{
          fontFamily: "Lato, sans-serif", fontSize: 17, lineHeight: 1.85,
          color: "#444", marginBottom: 24,
        }}>
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul style={{ margin: "8px 0 28px 0", padding: 0, listStyle: "none" }}>
          {(block.items ?? []).map((item, i) => (
            <li key={i} style={{
              fontFamily: "Lato, sans-serif", fontSize: 17, lineHeight: 1.75,
              color: "#444", display: "flex", alignItems: "flex-start",
              gap: 12, marginBottom: 14,
            }}>
              <span style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                minWidth: 22, height: 22, borderRadius: "50%",
                background: "linear-gradient(135deg,#7259A3,#A794CA)",
                color: "#fff", fontSize: 12, fontWeight: 700, marginTop: 3,
              }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "references":
      return (
        <div style={{
          marginTop: 60, padding: "32px 32px 28px",
          background: "#F7F4F0", borderRadius: 16,
          borderLeft: "4px solid #7259A3",
        }}>
          <h3 style={{
            fontFamily: "'Loubag', serif", fontSize: 20, color: "#7259A3",
            marginBottom: 20, fontWeight: 400,
          }}>
            Referencias bibliográficas
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {(block.items ?? []).map((ref, i) => (
              <li key={i} style={{
                fontFamily: "Lato, sans-serif", fontSize: 13.5, color: "#555",
                lineHeight: 1.7, marginBottom: 10, paddingLeft: 20,
                position: "relative",
              }}>
                <span style={{ position: "absolute", left: 0, color: "#A794CA" }}>•</span>
                {ref}
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

/* ── main component ── */
export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const idx = BLOG_ARTICLES.findIndex((a) => a.id === id);
  const article = BLOG_ARTICLES[idx];
  const hasNext = BLOG_ARTICLES.length > 1;
  const nextArticle = BLOG_ARTICLES[(idx + 1) % BLOG_ARTICLES.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!article) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "Lato, sans-serif" }}>
        <Moon size={48} color="#7259A3" style={{ marginBottom: 24 }} />
        <h1 style={{ fontFamily: "'Loubag', serif", color: "#2E2E3A", marginBottom: 16 }}>Artículo no encontrado</h1>
        <button onClick={() => navigate("/")} style={{ background: "#7259A3", color: "#fff", border: "none", padding: "12px 28px", borderRadius: 50, fontFamily: "Lato, sans-serif", fontSize: 15, cursor: "pointer" }}>
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      {/* ── Navbar ── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "rgba(255,255,255,0.97)",
        boxShadow: "0 2px 24px rgba(114,89,163,0.10)",
        backdropFilter: "blur(10px)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            onClick={() => navigate("/")}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: 8 }}
          >
            <img src={LOGO_CREMA} alt="Bedtime Journey" style={{ height: 44, filter: "invert(30%) sepia(40%) saturate(600%) hue-rotate(240deg) brightness(80%)" }} />
          </button>
          <button
            onClick={() => navigate("/")}
            aria-label="Volver a la página principal de Bedtime Journey"
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "none", border: "1.5px solid #7259A3",
              color: "#7259A3", borderRadius: 50, padding: "10px 22px",
              minHeight: 44,
              fontFamily: "Lato, sans-serif", fontSize: 14, fontWeight: 700,
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={16} /> Volver al inicio
          </button>
        </div>
      </header>

      {/* ── Hero ── */}
      <div style={{ position: "relative", height: "clamp(360px, 55vh, 560px)", overflow: "hidden" }}>
        <img
          src={article.image}
          alt={article.title}
          loading="eager"
          decoding="async"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(30,20,50,0.35) 0%, rgba(46,33,69,0.85) 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "0 24px 52px",
        }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <span style={{
              display: "inline-block", background: "rgba(114,89,163,0.9)",
              borderRadius: 50, padding: "5px 16px", marginBottom: 18,
              fontFamily: "Lato, sans-serif", fontSize: 11, fontWeight: 700,
              color: "#fff", letterSpacing: 1, textTransform: "uppercase",
            }}>
              {article.category}
            </span>
            <h1 style={{
              fontFamily: "'Loubag', serif",
              fontSize: "clamp(26px, 4.5vw, 50px)",
              fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: 20,
            }}>
              {article.title}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Lato, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)" }}>
                <Calendar size={14} /> {article.date}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Lato, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)" }}>
                <Clock size={14} /> {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "72px 24px 60px" }}>
        {article.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </main>

      {/* ── Navigation between articles ── */}
      <div style={{ background: "#F7F4F0", padding: "52px 24px 64px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}>
            {/* Back to home */}
            <button
              onClick={() => navigate("/")}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                background: "#fff", border: "1.5px solid #e8e4f0",
                borderRadius: 16, padding: "24px 28px",
                cursor: "pointer", textAlign: "left",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(114,89,163,0.12)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)")}
            >
              <ArrowLeft size={20} color="#7259A3" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: "Lato, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#A794CA", marginBottom: 4 }}>
                  Volver
                </div>
                <div style={{ fontFamily: "'Loubag', serif", fontSize: 16, color: "#2E2E3A", lineHeight: 1.3 }}>
                  Página principal
                </div>
              </div>
            </button>

            {/* Next article */}
            {hasNext && (
            <button
              onClick={() => navigate(`/blog/${nextArticle.id}`)}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                background: "linear-gradient(135deg,#7259A3,#A794CA)",
                border: "none", borderRadius: 16, padding: "24px 28px",
                cursor: "pointer", textAlign: "left",
                boxShadow: "0 4px 20px rgba(114,89,163,0.3)",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 36px rgba(114,89,163,0.45)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(114,89,163,0.3)")}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "Lato, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>
                  Siguiente artículo
                </div>
                <div style={{ fontFamily: "'Loubag', serif", fontSize: 16, color: "#fff", lineHeight: 1.3 }}>
                  {nextArticle.title.length > 60 ? nextArticle.title.slice(0, 60) + "…" : nextArticle.title}
                </div>
              </div>
              <ArrowRight size={20} color="#fff" style={{ flexShrink: 0 }} />
            </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer style={{ background: "#2E2133", padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <img src={LOGO_CREMA} alt="Bedtime Journey" style={{ height: 48, marginBottom: 20 }} />
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>
            Coaching de sueño infantil con evidencia científica y apego seguro
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 24 }}>
            {[
              { icon: <Instagram size={18} />, href: "https://instagram.com/bedtimejourneycr" },
              { icon: <Facebook size={18} />, href: "#" },
              { icon: <Mail size={18} />, href: "mailto:mariale.bedtime@gmail.com" },
            ].map(({ icon, href }, i) => (
              <a key={i} href={href} style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 40, height: 40, borderRadius: "50%",
                background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)",
              }}>
                {icon}
              </a>
            ))}
          </div>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            © 2025 Bedtime Journey · Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
