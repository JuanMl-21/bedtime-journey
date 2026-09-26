import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

export const Proceso = React.memo(function Proceso() {
  const steps = [
    { num: "01", icon: "📞", title: "Llamada de Inicio", desc: "Hablamos para conocer tu historia, las necesidades de tu bebé y los objetivos de tu familia. Aquí establecemos las metas del proceso juntos." },
    { num: "02", icon: "📝", title: "Plan Personalizado", desc: "Diseño un plan de sueño 100% adaptado a la realidad, características y valores de tu familia. Ningún plan es igual a otro." },
    { num: "03", icon: "🌙", title: "Acompañamiento Diario", desc: "Durante 3 semanas estoy contigo todos los días. Resuelvo dudas, celebro avances y ajusto el plan según cómo responde tu bebé." },
  ];

  return (
    <section id="proceso" style={{ background: "linear-gradient(135deg,#2E2145 0%,#4A5F8A 100%)", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{ position: "absolute", width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.5)", left: `${12 + i * 12}%`, top: `${15 + (i * 23) % 70}%`, animation: `twinkle ${1.5 + i * 0.4}s ease-in-out infinite alternate` }} />
      ))}
      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#A794CA", display: "block", marginBottom: 16 }}>
            El proceso
          </span>
          <h2 style={{ fontFamily: "'Loubag', serif", fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 400, color: "#fff", lineHeight: 1.25 }}>
            ¿Cómo funciona<br /><em style={{ fontStyle: "italic", color: "#A794CA" }}>Bedtime Journey?</em>
          </h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 32 }}>
          {steps.map(({ num, icon, title, desc }) => (
            <motion.div key={num} variants={fade}
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 24, padding: "40px 32px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Loubag', serif", fontSize: 56, color: "#A794CA", opacity: 0.4, lineHeight: 1, marginBottom: 4 }}>{num}</div>
              <div style={{ fontSize: 44, marginBottom: 16 }}>{icon}</div>
              <h3 style={{ fontFamily: "'Loubag', serif", fontSize: 22, color: "#fff", marginBottom: 14 }}>{title}</h3>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.75 }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: "center", marginTop: 56 }}>
          <a href="#contacto"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg,#7259A3,#A794CA)", color: "#fff", padding: "18px 40px", borderRadius: 50, fontFamily: "Lato, sans-serif", fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 32px rgba(114,89,163,0.5)" }}>
            Comenzar mi viaje <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
});
