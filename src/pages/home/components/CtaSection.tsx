import React from "react";
import { motion } from "framer-motion";
import { Moon } from "lucide-react";

const IMAGES_CTA = "https://images.unsplash.com/photo-1649889385821-19ad2b3b37d3?w=1200&q=80";
const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export const CtaSection = React.memo(function CtaSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "100px 24px" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMAGES_CTA})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(46,33,69,0.88),rgba(114,89,163,0.80))", zIndex: 1 }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <Moon size={48} color="#A794CA" style={{ marginBottom: 24 }} />
          <h2 style={{ fontFamily: "'Loubag', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, color: "#fff", lineHeight: 1.25, marginBottom: 24 }}>
            ¿Lista para que toda la familia<br /><em style={{ fontStyle: "italic", color: "#A794CA" }}>vuelva a dormir bien?</em>
          </h2>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 18, color: "rgba(255,255,255,0.85)", lineHeight: 1.75, marginBottom: 44 }}>
            No tienes que seguir aguantando las noches sin dormir. Estoy aquí para acompañarte en cada paso del camino hacia la calma.
          </p>
          <a href="#contacto"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg,#7259A3,#A794CA)", color: "#fff", padding: "18px 44px", borderRadius: 50, fontFamily: "Lato, sans-serif", fontSize: 17, fontWeight: 700, textDecoration: "none", boxShadow: "0 12px 40px rgba(114,89,163,0.5)" }}>
            ✨ Comenzar mi viaje ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
});
