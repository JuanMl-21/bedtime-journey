import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

export const Testimonios = React.memo(function Testimonios() {
  const testimonials = [
    { name: "Valentina G.", baby: "Mamá de Matías, 8 meses", text: "Llevaba 6 meses sin dormir bien y sentía que no podía más. Mariale me acompañó con tanta paciencia y calidez que en menos de 2 semanas Matías ya dormía solo toda la noche. ¡La mejor inversión que he hecho como mamá!", stars: 5 },
    { name: "Andrés & Camila", baby: "Papás de Sofía, 14 meses", text: "Lo que más me sorprendió fue que Mariale nos explicaba el porqué de cada paso. No sentimos que estábamos siguiendo reglas a ciegas — entendíamos el proceso. Eso marcó toda la diferencia para nosotros como familia.", stars: 5 },
    { name: "Adriana M.", baby: "Mamá de Lucas, 2 años", text: "Mi Lucas tenía una crisis de sueño terrible a los 2 años. El plan personalizado de Mariale fue un milagro. Ahora se duerme solo, hace sus siestas y yo por fin pude retomar mi vida. Lloro de agradecimiento cada vez que lo cuento.", stars: 5 },
  ];

  return (
    <section id="testimonios" style={{ background: "#F7F4F0", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{ fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#7259A3", display: "block", marginBottom: 16 }}>
            Testimonios
          </span>
          <h2 style={{ fontFamily: "'Loubag', serif", fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 400, color: "#2E2E3A", lineHeight: 1.25 }}>
            Familias que ya<br /><em style={{ fontStyle: "italic", color: "#7259A3" }}>encontraron la calma</em>
          </h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 28 }}>
          {testimonials.map(({ name, baby, text, stars }) => (
            <motion.div key={name} variants={fade}
              style={{ background: "#fff", borderRadius: 24, padding: "40px 32px", border: "1px solid #e8e4f0", boxShadow: "0 8px 32px rgba(114,89,163,0.08)" }}
              whileHover={{ y: -4 }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                {[...Array(stars)].map((_, i) => (
                  <Star key={i} size={18} fill="#7259A3" color="#7259A3" />
                ))}
              </div>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, lineHeight: 1.8, color: "#555", fontStyle: "italic", marginBottom: 28 }}>
                "{text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#7259A3,#A794CA)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Loubag', serif", fontSize: 18, fontWeight: 700 }}>
                  {name[0]}
                </div>
                <div>
                  <div style={{ fontFamily: "Lato, sans-serif", fontSize: 15, fontWeight: 700, color: "#2E2E3A" }}>{name}</div>
                  <div style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#7259A3" }}>{baby}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
