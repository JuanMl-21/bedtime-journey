import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useBlogArticles } from "../../../hooks/useBlogArticles";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

/* Skeleton card shown while loading */
const SkeletonCard = () => (
  <div style={{
    borderRadius: 20, overflow: "hidden", background: "#fff",
    border: "1px solid #e8e4f0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
  }}>
    <div style={{
      height: 220, background: "linear-gradient(110deg, #f0edf5 8%, #e8e4f0 18%, #f0edf5 33%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.5s infinite",
    }} />
    <div style={{ padding: "28px 28px 32px" }}>
      <div style={{ height: 12, width: "40%", background: "#f0edf5", borderRadius: 6, marginBottom: 14 }} />
      <div style={{ height: 18, width: "90%", background: "#f0edf5", borderRadius: 6, marginBottom: 12 }} />
      <div style={{ height: 14, width: "100%", background: "#f0edf5", borderRadius: 6, marginBottom: 8 }} />
      <div style={{ height: 14, width: "75%", background: "#f0edf5", borderRadius: 6, marginBottom: 20 }} />
      <div style={{ height: 13, width: "30%", background: "#f0edf5", borderRadius: 6 }} />
    </div>
  </div>
);

export const BlogSection = React.memo(function BlogSection() {
  const navigate = useNavigate();
  const { articles, loading } = useBlogArticles();

  return (
    <section id="blog" style={{ background: "#fff", padding: "100px 24px" }}>
      {/* Shimmer animation for skeleton */}
      <style>{`@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{ fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#7259A3", display: "block", marginBottom: 16 }}>
            Blog y Recursos
          </span>
          <h2 style={{ fontFamily: "'Loubag', serif", fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 400, color: "#2E2E3A", lineHeight: 1.25 }}>
            Aprende sobre el<br /><em style={{ fontStyle: "italic", color: "#7259A3" }}>sueño de tu bebé</em>
          </h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", justifyContent: "center", gap: 28 }}>
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            articles.map((article) => (
              <motion.div key={article.id} variants={fade}
                onClick={() => navigate(`/blog/${article.id}`)}
                style={{ borderRadius: 20, overflow: "hidden", background: "#fff", border: "1px solid #e8e4f0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", cursor: "pointer" }}
                whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(114,89,163,0.15)" }}>
                <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.07)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <span style={{ position: "absolute", top: 16, left: 16, background: "rgba(114,89,163,0.9)", borderRadius: 50, padding: "5px 14px", fontFamily: "Lato, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: 1 }}>
                    {article.category}
                  </span>
                </div>
                <div style={{ padding: "28px 28px 32px" }}>
                  <div style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#aaa", marginBottom: 10 }}>{article.date} · {article.readTime}</div>
                  <h3 style={{ fontFamily: "'Loubag', serif", fontSize: 20, color: "#2E2E3A", lineHeight: 1.4, marginBottom: 12 }}>{article.title}</h3>
                  <p style={{ fontFamily: "Lato, sans-serif", fontSize: 14, color: "#666", lineHeight: 1.75, marginBottom: 20 }}>{article.excerpt}</p>
                  <span style={{ fontFamily: "Lato, sans-serif", fontSize: 13, fontWeight: 700, color: "#7259A3", display: "flex", alignItems: "center", gap: 6 }}>
                    Leer más <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
});

