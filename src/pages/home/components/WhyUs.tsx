import React from "react";
import { motion } from "framer-motion";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

export const WhyUs = React.memo(function WhyUs() {
  const reasons = [
    { emoji: "🎓", title: "Educadora, no solo Coach", desc: "Mi formación en educación especial transforma el enfoque: me permite visualizar de manera integral la etapa de desarrollo de tu bebé, y ser creativa y flexible en el proceso.", color: "#7259A3" },
    { emoji: "💌", title: "Acompañamiento Real", desc: "Tres semanas al lado de tu familia, viviendo el proceso, realizando los ajustes que sean necesarios, siendo tu compañera de viaje con escucha, guía y empatía.", color: "#4A5F8A" },
    { emoji: "🌿", title: "Sin comprometer el apego", desc: "Un enfoque que integra ciencia del sueño con crianza respetuosa. No hay que elegir entre dormir bien y criar con amor.", color: "#85A5D4" },
    { emoji: "📋", title: "Plan 100% personalizado", desc: "No existen fórmulas universales. El plan es tuyo, de tu bebé, de tu familia. Adaptado a su realidad, temperamento y valores.", color: "#A794CA" },
    { emoji: "🔬", title: "Basado en evidencia", desc: "Cada recomendación está respaldada por la ciencia del sueño y el desarrollo infantil. Aprenderás el porqué detrás de cada paso.", color: "#D0A3CB" },
    { emoji: "🤗", title: "Sin juicios, solo apoyo", desc: "Cada familia tiene su historia. Juzgar no es parte del camino — acompañar, entender y celebrar cada avance, sí.", color: "#7259A3" },
  ];

  return (
    <section style={{ background: "#F7F4F0", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{ fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#7259A3", display: "block", marginBottom: 16 }}>
            ¿Por qué elegirnos?
          </span>
          <h2 style={{ fontFamily: "'Loubag', serif", fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 400, color: "#2E2E3A", lineHeight: 1.25, marginBottom: 20 }}>
            Lo que hace única a<br /><em style={{ fontStyle: "italic", color: "#7259A3" }}>Bedtime Journey</em>
          </h2>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 17, color: "#666", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Bedtime Journey es el único servicio de coaching de sueño infantil con enfoque educativo que acompaña a las familias con comprensión profunda del sueño, el apego y el desarrollo.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 24 }}>
          {reasons.map(({ emoji, title, desc, color }) => (
            <motion.div key={title} variants={fade}
              style={{ background: "#fff", borderRadius: 20, padding: "36px 32px", border: "1px solid #e8e4f0", transition: "transform 0.25s, box-shadow 0.25s", cursor: "default" }}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(114,89,163,0.15)" }}>
              <div style={{ fontSize: 40, marginBottom: 18 }}>{emoji}</div>
              <h3 style={{ fontFamily: "'Loubag', serif", fontSize: 20, color, marginBottom: 12 }}>{title}</h3>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 14, color: "#666", lineHeight: 1.75 }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
