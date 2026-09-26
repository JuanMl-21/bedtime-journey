import React from "react";
import { motion } from "framer-motion";
import { Star, BookOpen, Heart, Moon } from "lucide-react";

const IMAGES_ABOUT = "https://images.unsplash.com/photo-1583086762675-5a88bcc72548?w=900&q=85";
const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export const About = React.memo(function About() {
  return (
    <section id="about" style={{ background: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ position: "relative" }}>
          <div style={{ borderRadius: "32px 32px 32px 8px", overflow: "hidden", boxShadow: "0 24px 60px rgba(114,89,163,0.2)" }}>
            <img
              src={IMAGES_ABOUT}
              alt="Mariale Muñoz con bebé"
              loading="lazy"
              decoding="async"
              style={{ width: "100%", maxHeight: 520, objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
          </div>
          <div style={{ position: "absolute", bottom: -24, right: -24, background: "linear-gradient(135deg,#7259A3,#A794CA)", borderRadius: 20, padding: "20px 28px", color: "#fff", fontFamily: "Lato, sans-serif", boxShadow: "0 12px 32px rgba(114,89,163,0.4)" }}>
            <div style={{ fontSize: 32, fontFamily: "'Loubag', serif", fontWeight: 600 }}>❤️</div>
            <div style={{ fontSize: 13, fontWeight: 700, marginTop: 6 }}>Educadora Especial</div>
            <div style={{ fontSize: 11, opacity: 0.8 }}>& Coach de Sueño</div>
          </div>
          <div style={{ position: "absolute", top: -16, left: -16, background: "#EEE1CF", borderRadius: 16, padding: "14px 20px", fontFamily: "Lato, sans-serif", boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}>
            <Star fill="#7259A3" color="#7259A3" size={20} />
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <span style={{ fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#7259A3", display: "block", marginBottom: 16 }}>
            Hola, soy Mariale 👋
          </span>
          <h2 style={{ fontFamily: "'Loubag', serif", fontSize: "clamp(32px, 4vw, 46px)", fontWeight: 400, color: "#2E2E3A", lineHeight: 1.2, marginBottom: 24 }}>
            La docente detrás del viaje<br />
            <em style={{ fontStyle: "italic", color: "#7259A3" }}>hacia el buen dormir</em>
          </h2>
          <div style={{ width: 56, height: 3, background: "#7259A3", borderRadius: 2, marginBottom: 32 }} />

          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 16, lineHeight: 1.85, color: "#555", marginBottom: 20 }}>
            Soy una <strong style={{ color: "#4A5F8A" }}>educadora especial</strong> que quiso ampliar los contextos donde el conocimiento sobre la infancia podía aportar más allá de un centro educativo. Además, soy esposa y en este momento estoy descubriendo una nueva faceta como <strong style={{ color: "#7259A3" }}>Coach de Sueño Infantil.</strong>
          </p>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 16, lineHeight: 1.85, color: "#555", marginBottom: 20 }}>
            Espero llegar a ser esa mano amiga, guía y compañía en los diferentes hitos de tu familia: la llegada de tu primer hijo, o de un nuevo hermanito, o cuando tu bebé está pasando a ser un niño y desbloquea nuevos retos en sus 2 o 3 años. Quiero estar en los momentos de cansancio de muchas mamás y papás que quieren lo mejor para sus hijos y buscan un cambio hacia ser una familia más feliz y equilibrada.
          </p>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 16, lineHeight: 1.85, color: "#555", marginBottom: 32 }}>
            No solo quiero darte los pasos para que tu bebé aprenda a dormir solo: mi corazón de docente anhela que en este viaje haya mucho aprendizaje, no solo en términos de sueño, sino también de ciencia, apego seguro y disciplina positiva.
          </p>

          <blockquote style={{ borderLeft: "4px solid #D0A3CB", paddingLeft: 24, marginBottom: 36, fontFamily: "Lato, sans-serif", fontSize: 17, fontStyle: "italic", color: "#4A5F8A", lineHeight: 1.8 }}>
            "Bedtime Journey describe el viaje que vas a emprender para dormir mejor: acompañarás a tu bebé a desarrollar una nueva habilidad, un proceso lleno de retos, ilusión y esperanza. Aquí no entrenamos sueño, sino que vivenciamos el desarrollo natural de tu bebé."
            <br /><strong style={{ fontStyle: "normal", fontSize: 14, color: "#7259A3", display: "block", marginTop: 10 }}>— Mariale Muñoz</strong>
          </blockquote>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { icon: <BookOpen size={18} />, label: "Aprendizaje" },
              { icon: <Heart size={18} />, label: "Bienestar familiar" },
              { icon: <Moon size={18} />, label: "Respeto" },
            ].map(({ icon, label }) => (
              <span key={label} style={{ display: "flex", alignItems: "center", gap: 8, background: "#F7F4F0", borderRadius: 50, padding: "10px 20px", fontFamily: "Lato, sans-serif", fontSize: 13, fontWeight: 700, color: "#7259A3" }}>
                {icon} {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});
