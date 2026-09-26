import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

export interface Service {
  tag?: string;
  icon: string;
  name: string;
  price: string;
  ages: string;
  color: string;
  gradient: string;
  featured: boolean;
  includes: string[];
  description: string;
  cost: string;
}

interface ServiciosProps {
  onSelectService?: (serviceName: string) => void;
}

export const Servicios = React.memo(function Servicios({ onSelectService }: ServiciosProps) {
  const [selected, setSelected] = useState<Service | null>(null);

  const services: Service[] = [
    {
      tag: "Más popular",
      icon: "🌙",
      name: "Asesoría Bedtime Journey",
      price: "$280 USD",
      ages: "5 meses – 5 años",
      color: "#7259A3",
      gradient: "linear-gradient(135deg,#7259A3,#A794CA)",
      featured: true,
      includes: [
        "Llamada inicial para conocernos y establecer metas",
        "Plan personalizado según la etapa de tu bebé",
        "3 semanas de acompañamiento diario",
        "Ajustes sobre la marcha y celebración de avances",
        "Semanas adicionales disponibles si las necesitas",
      ],
      description:
        "Excelente elección de plan. Esta modalidad incluye una llamada inicial que nos permite conocernos, conocer tu historia y necesidades, y plantear objetivos acordes a tu realidad. Tendrás un plan personalizado pensado en la etapa del desarrollo de tu hijo y respetuoso de tu estilo de crianza. Además, durante las 3 semanas estaré acompañándote para resolver dudas, realizar ajustes y celebrar avances.",
      cost: "Inversión: $280 · Semana adicional: $50",
    },
    {
      icon: "⭐",
      name: "Consulta Bedtime Journey",
      price: "$60 USD",
      ages: "5 meses – 5 años",
      color: "#4A5F8A",
      gradient: "linear-gradient(135deg,#4A5F8A,#85A5D4)",
      featured: false,
      includes: [
        "Llamada corta para conocerte y conocer tu historia",
        "Definimos juntas tus metas",
        "Plan de sueño adaptado a tu realidad",
        "Sesión de 1 hora para explicarte el plan y resolver dudas",
      ],
      description:
        "Puede ser la opción que más se ajuste a ti. Primero tendremos una llamada corta que me permite conocerte a vos y la historia de tu familia; en este primer espacio establecemos tus metas. Una vez que tuvimos este espacio, creo un plan que se adapte a tu realidad en el proceso de sueño de tu hijo. Por último, tenemos una sesión de 1 hora donde te explico el plan y resolvemos dudas.",
      cost: "Inversión: $60",
    },
    {
      icon: "🍼",
      name: "The Journey Begin",
      price: "$80 USD",
      ages: "Recién nacidos 0 – 5 meses",
      color: "#85A5D4",
      gradient: "linear-gradient(135deg,#85A5D4,#A794CA)",
      featured: false,
      includes: [
        "Acompañamiento para mamás primerizas o que quieren hacerlo distinto",
        "Aprendizaje y preparación para esta etapa",
        "Guía para mediar en los hábitos de sueño desde el inicio",
        "Preparar el camino hacia el momento de aprender a dormir solo",
      ],
      description:
        "Este plan está pensado para ti que eres mamá primeriza, o que quieres hacer las cosas diferentes y preparar el camino hacia buenos hábitos de sueño. Este espacio es de aprendizaje y preparación en todo lo que pueda hacer esta etapa tan demandante más llevadera.",
      cost: "Inversión: $80",
    },
  ];

  const handleSelectAndScroll = (serviceName: string) => {
    setSelected(null);
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const contactElem = document.getElementById("contacto");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" style={{ background: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{ fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#7259A3", display: "block", marginBottom: 16 }}>
            Nuestros Servicios y Tarifas
          </span>
          <h2 style={{ fontFamily: "'Loubag', serif", fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 400, color: "#2E2E3A", lineHeight: 1.25 }}>
            Planes transparentes<br /><em style={{ fontStyle: "italic", color: "#7259A3" }}>para cada etapa de tu familia</em>
          </h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 24 }}>
          {services.map((s) => (
            <motion.div key={s.name} variants={fade}
              style={{
                background: s.featured ? s.gradient : "#fff",
                borderRadius: 24,
                padding: "36px 28px",
                border: s.featured ? "none" : "1px solid #e8e4f0",
                boxShadow: s.featured ? "0 20px 56px rgba(114,89,163,0.35)" : "0 4px 20px rgba(0,0,0,0.06)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.25s",
              }}
              whileHover={{ y: -6 }}>

              {s.tag && (
                <span style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 50, padding: "4px 14px", fontSize: 11, fontFamily: "Lato, sans-serif", fontWeight: 700, color: s.featured ? "#fff" : s.color, letterSpacing: 1 }}>
                  {s.tag}
                </span>
              )}

              <div>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
                <div style={{ fontFamily: "Lato, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: s.featured ? "rgba(255,255,255,0.75)" : s.color, marginBottom: 6 }}>
                  {s.ages}
                </div>
                <h3 style={{ fontFamily: "'Loubag', serif", fontSize: 22, color: s.featured ? "#fff" : "#2E2E3A", marginBottom: 12, lineHeight: 1.3 }}>
                  {s.name}
                </h3>

                {/* VISIBLE PRICE BADGE */}
                <div style={{
                  display: "inline-block",
                  background: s.featured ? "rgba(255,255,255,0.2)" : "#F7F4F0",
                  color: s.featured ? "#fff" : s.color,
                  padding: "6px 14px",
                  borderRadius: 12,
                  fontFamily: "'Loubag', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 20,
                  border: s.featured ? "1px solid rgba(255,255,255,0.3)" : "1px solid #e8e4f0"
                }}>
                  {s.price}
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                  {s.includes.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Lato, sans-serif", fontSize: 14, color: s.featured ? "rgba(255,255,255,0.9)" : "#555", padding: "6px 0", lineHeight: 1.5 }}>
                      <Check size={16} style={{ flexShrink: 0, marginTop: 2, color: s.featured ? "rgba(255,255,255,0.9)" : "#7259A3" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <button onClick={() => setSelected(s)}
                  style={{ display: "block", width: "100%", textAlign: "center", cursor: "pointer", background: "none", border: s.featured ? "1px solid rgba(255,255,255,0.5)" : "1px solid #7259A3", color: s.featured ? "#fff" : "#7259A3", padding: "10px 20px", borderRadius: 50, fontFamily: "Lato, sans-serif", fontSize: 13, fontWeight: 700 }}>
                  Ver detalles completos
                </button>

                <button onClick={() => handleSelectAndScroll(s.name)}
                  style={{ display: "block", width: "100%", textAlign: "center", cursor: "pointer", background: s.featured ? "#fff" : s.gradient, border: "none", color: s.featured ? "#7259A3" : "#fff", padding: "14px 28px", borderRadius: 50, fontFamily: "Lato, sans-serif", fontSize: 14, fontWeight: 700, boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
                  Quiero este plan →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charlas */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          style={{ marginTop: 36, background: "linear-gradient(135deg,#2E2145,#4A5F8A)", borderRadius: 24, padding: "36px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{ fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#A794CA", marginBottom: 8 }}>Charlas Educativas</div>
            <h3 style={{ fontFamily: "'Loubag', serif", fontSize: 26, color: "#fff" }}>Talleres para Padres</h3>
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.75)", marginTop: 8, lineHeight: 1.6 }}>Charlas personalizadas para comunidades educativas y grupos de crianza sobre sueño infantil y hábitos saludables.</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <button onClick={() => handleSelectAndScroll("Talleres para Padres")}
              style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 32px", borderRadius: 50, fontFamily: "Lato, sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              Solicitar información sobre talleres
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal de detalle de servicio */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(46,33,69,0.6)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.28 }}
              onClick={e => e.stopPropagation()}
              style={{ background: "#fff", borderRadius: 24, maxWidth: 560, width: "100%", maxHeight: "88vh", overflowY: "auto", boxShadow: "0 32px 80px rgba(46,33,69,0.4)", position: "relative" }}
            >
              <div style={{ background: selected.gradient, padding: "36px 36px 28px", position: "relative" }}>
                <button onClick={() => setSelected(null)} aria-label="Cerrar ventana de detalles"
                  style={{ position: "absolute", top: 18, right: 18, width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <X size={20} />
                </button>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{selected.icon}</div>
                <div style={{ fontFamily: "Lato, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.8)", marginBottom: 6 }}>
                  {selected.ages}
                </div>
                <h3 style={{ fontFamily: "'Loubag', serif", fontSize: 26, color: "#fff", lineHeight: 1.25, margin: 0 }}>
                  {selected.name}
                </h3>
              </div>

              <div style={{ padding: "32px 36px 36px" }}>
                <p style={{ fontFamily: "Lato, sans-serif", fontSize: 16, lineHeight: 1.85, color: "#555", marginBottom: 28 }}>
                  {selected.description}
                </p>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                  {selected.includes.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Lato, sans-serif", fontSize: 14, color: "#555", padding: "6px 0", lineHeight: 1.5 }}>
                      <Check size={16} style={{ flexShrink: 0, marginTop: 2, color: selected.color }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div style={{ background: "#F7F4F0", borderRadius: 16, padding: "18px 24px", marginBottom: 28, borderLeft: `4px solid ${selected.color}` }}>
                  <div style={{ fontFamily: "'Loubag', serif", fontSize: 20, color: selected.color, fontWeight: 600 }}>
                    {selected.cost}
                  </div>
                </div>

                <button onClick={() => handleSelectAndScroll(selected.name)}
                  style={{ display: "block", width: "100%", textAlign: "center", background: selected.gradient, color: "#fff", padding: "16px 32px", borderRadius: 50, fontFamily: "Lato, sans-serif", fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 8px 28px rgba(114,89,163,0.4)" }}>
                  Reservar esta modalidad ({selected.price}) →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});
