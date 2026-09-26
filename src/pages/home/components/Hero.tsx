import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const LOGO_CREMA = "/images/logo-crema.svg";
const IMAGES_HERO = "https://images.unsplash.com/photo-1510632233616-88025944e960?w=1600&q=85";

export const Hero = React.memo(function Hero() {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMAGES_HERO})`, backgroundSize: "cover", backgroundPosition: "center 30%", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(46,33,69,0.82) 0%, rgba(74,95,138,0.72) 60%, rgba(114,89,163,0.60) 100%)", zIndex: 1 }} />
      {/* Stars */}
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{ position: "absolute", width: i % 3 === 0 ? 4 : 2, height: i % 3 === 0 ? 4 : 2, borderRadius: "50%", background: "rgba(255,255,255,0.7)", left: `${8 + i * 8}%`, top: `${10 + (i * 17) % 60}%`, zIndex: 2, animation: `twinkle ${2 + i * 0.3}s ease-in-out infinite alternate` }} />
      ))}
      <style>{`
        @keyframes twinkle{from{opacity:0.3}to{opacity:1}}
        @keyframes float{from{transform:translateY(0)}to{transform:translateY(-12px)}}
        .hero-title { font-size: 20px; }
        @media(min-width:540px){ .hero-title { font-size: 26px; } }
        @media(min-width:768px){ .hero-title { font-size: 30px; } }
        @media(min-width:900px){ .hero-title { font-size: 38px; } }
        @media(min-width:1100px){ .hero-title { font-size: 46px; } }
        @media(min-width:1280px){ .hero-title { font-size: 52px; } }
        .hero-line { display: block; }
        @media(min-width:768px){ .hero-line { white-space: nowrap; } }
      `}</style>

      <div style={{ position: "relative", zIndex: 3, maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", textAlign: "center", width: "100%" }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span style={{ display: "inline-block", background: "rgba(167,148,202,0.25)", border: "1px solid rgba(167,148,202,0.5)", borderRadius: 50, padding: "8px 24px", fontFamily: "Lato, sans-serif", fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: "#D0A3CB", marginBottom: 28 }}>
            ✨ Educadora Especial & Coach de Sueño Infantil
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center" style={{ gap: 40, maxWidth: 1000, margin: "0 auto 28px" }}>
          <motion.img
            src={LOGO_CREMA}
            alt="Bedtime Journey"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            style={{ height: 170, objectFit: "contain", flexShrink: 0 }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-title text-center md:text-left"
            style={{ fontFamily: "'Loubag', serif", fontWeight: 400, color: "#fff", lineHeight: 1.3, letterSpacing: "0.06em", margin: 0 }}>
            <span className="hero-line">Te acompaño en tu</span>
            <em className="hero-line" style={{ fontStyle: "italic", color: "#A794CA" }}>viaje hacia el descanso</em>
            <span className="hero-line">de toda tu familia</span>
          </motion.h1>
        </div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          style={{ fontFamily: "Lato, sans-serif", fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.85)", maxWidth: 580, margin: "0 auto 44px", lineHeight: 1.75 }}>
          Ayudo a tu bebé de 0 a 5 años a desarrollar hábitos de sueño saludables con una guía respetuosa adaptada a su etapa, su temperamento y el estilo de tu familia.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contacto"
            style={{ background: "linear-gradient(135deg,#7259A3,#A794CA)", color: "#fff", padding: "16px 36px", borderRadius: 50, fontSize: 16, fontWeight: 700, textDecoration: "none", fontFamily: "Lato, sans-serif", boxShadow: "0 8px 32px rgba(114,89,163,0.5)", transition: "transform 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
            Agendar una llamada de orientación
          </a>
          <a href="#servicios"
            style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", padding: "16px 36px", borderRadius: 50, fontSize: 16, fontWeight: 700, textDecoration: "none", fontFamily: "Lato, sans-serif", backdropFilter: "blur(4px)", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}>
            Ver planes y precios (desde $60)
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          style={{ marginTop: 80, display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {[["❤️", "Educación & Apego"], ["3 semanas", "Acompañamiento real"], ["0–5 años", "Edades atendidas"], ["Desde $60", "Planes a medida"]].map(([n, l]) => (
            <div key={n} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Loubag', serif", fontSize: 30, fontWeight: 600, color: "#A794CA" }}>{n}</div>
              <div style={{ fontFamily: "Lato, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <a href="#about" aria-label="Ir a la sección Conóceme" style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 3, animation: "float 2s ease-in-out infinite alternate", color: "rgba(255,255,255,0.6)" }}>
        <ChevronDown size={32} />
      </a>
    </section>
  );
});
