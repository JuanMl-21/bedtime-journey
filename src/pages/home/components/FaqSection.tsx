import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export const FaqSection = React.memo(function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Qué diferencia hay entre la Asesoría Bedtime Journey y la Consulta?",
      a: "La Asesoría ($280) incluye 3 semanas completas de acompañamiento diario persona a persona con Mariale para guiarte, resolver dudas en tiempo real y hacer ajustes sobre la marcha. La Consulta ($60) te entrega un plan personalizado y una sesión de 1 hora para explicártelo todo, ideal si sientes que necesitas la guía estructurada pero prefieres implementar los cambios por tu cuenta."
    },
    {
      q: "¿Qué incluye el acompañamiento diario y en qué horario respondes?",
      a: "Durante las 3 semanas estamos en contacto constante por WhatsApp. Reviso la bitácora de sueño de tu bebé, respondo tus inquietudes diarias, te sostengo emocionalmente y realizamos ajustes inmediatos si algo no sale como esperábamos."
    },
    {
      q: "¿Qué resultados puedo esperar y cuánto suele tardar el proceso?",
      a: "Cada bebé es único y se respeta su ritmo biológico. Muchas familias comienzan a notar cambios significativos en los despertares y la facilidad para conciliar el sueño dentro de los primeros 5 a 10 días."
    },
    {
      q: "¿Qué ocurre si mi familia necesita más de 3 semanas de acompañamiento?",
      a: "¡No te preocupes! Si sientes que necesitan más tiempo o surge una regresión/enfermedad en el camino, puedes renovar semanas adicionales de seguimiento por un costo preferencial de $50 USD por semana."
    },
    {
      q: "¿Trabajas en línea con familias fuera de Costa Rica?",
      a: "¡Sí, totalmente! Todo el proceso (llamadas por videollamada y seguimiento por WhatsApp) se realiza 100% en línea, permitiéndome acompañar a familias en cualquier país de Latinoamérica, Estados Unidos o España."
    },
    {
      q: "¿Cómo se cuida el apego seguro y el bienestar de mi bebé?",
      a: "Jamás dejamos llorar solo a un bebé. Como Educadora Especial, mi enfoque combina la ciencia del sueño con la crianza respetuosa: siempre atenderemos el llanto, validaremos sus emociones y construiremos hábitos desde el amor y la seguridad afectiva."
    },
    {
      q: "¿Cómo se realiza el pago y la reserva?",
      a: "Una vez que completas el formulario de consulta o nos escribes por WhatsApp, acordamos la fecha de inicio y te enviamos los métodos de pago disponibles (SINPE Móvil para Costa Rica, o transferencia/PayPal para otros países)."
    }
  ];

  return (
    <section id="faq" style={{ background: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#7259A3", display: "block", marginBottom: 16 }}>
            Preguntas Frecuentes
          </span>
          <h2 style={{ fontFamily: "'Loubag', serif", fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 400, color: "#2E2E3A", lineHeight: 1.25, marginBottom: 16 }}>
            Resolvemos tus dudas<br /><em style={{ fontStyle: "italic", color: "#7259A3" }}>antes de iniciar el viaje</em>
          </h2>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 16, color: "#666", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
            Todo lo que necesitas saber sobre el acompañamiento, tiempos y metodología.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: isOpen ? "#F7F4F0" : "#fff",
                  borderRadius: 18,
                  border: isOpen ? "1.5px solid #7259A3" : "1px solid #e8e4f0",
                  overflow: "hidden",
                  transition: "all 0.25s ease"
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  style={{
                    width: "100%",
                    padding: "22px 28px",
                    background: "none",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    cursor: "pointer",
                    textAlign: "left"
                  }}
                >
                  <span style={{ fontFamily: "'Loubag', serif", fontSize: 18, color: "#2E2E3A", fontWeight: 500, lineHeight: 1.35 }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: isOpen ? "#7259A3" : "rgba(114,89,163,0.1)",
                    color: isOpen ? "#fff" : "#7259A3",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    transition: "transform 0.3s"
                  }}>
                    <ChevronDown size={18} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div style={{ padding: "0 28px 24px", fontFamily: "Lato, sans-serif", fontSize: 15, color: "#555", lineHeight: 1.8 }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 44, textAlign: "center", background: "#F7F4F0", borderRadius: 20, padding: "28px 32px", border: "1px solid #e8e4f0" }}>
          <HelpCircle size={28} color="#7259A3" style={{ marginBottom: 8 }} />
          <h4 style={{ fontFamily: "'Loubag', serif", fontSize: 20, color: "#2E2E3A", marginBottom: 8 }}>¿Tienes alguna otra duda específica?</h4>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 14, color: "#666", marginBottom: 16 }}>Escríbeme directamente por WhatsApp y con gusto resolveré tus inquietudes.</p>
          <a
            href="https://wa.me/50686489507?text=¡Hola%20Mariale!%20Tengo%20una%20pregunta%20sobre%20tus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#7259A3", color: "#fff", padding: "12px 28px", borderRadius: 50, fontFamily: "Lato, sans-serif", fontSize: 14, fontWeight: 700, textDecoration: "none" }}
          >
            Hablar directamente por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
});
