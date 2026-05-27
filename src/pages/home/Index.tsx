import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Moon, Star, ChevronDown, Instagram, Facebook, Mail, Phone, Check, ArrowRight, Heart, BookOpen } from "lucide-react";
import { BLOG_ARTICLES } from "../../data/blogData";

const LOGO = "/images/logo-morado.svg";
const LOGO_CREMA = "/images/logo-crema.svg";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1510632233616-88025944e960?w=1600&q=85",
  about: "https://images.unsplash.com/photo-1583086762675-5a88bcc72548?w=900&q=85",
  blog1: "https://images.unsplash.com/photo-1552819289-e14fbbcea868?w=600&q=80",
  blog2: "https://images.unsplash.com/photo-1524808533204-cda7fe65ff05?w=600&q=80",
  blog3: "https://images.unsplash.com/photo-1489087584469-437d40177a45?w=600&q=80",
  feet: "https://images.unsplash.com/photo-1511948374796-056e8f289f34?w=700&q=80",
  cta: "https://images.unsplash.com/photo-1649889385821-19ad2b3b37d3?w=1200&q=80",
};

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

/* ══════════════════════════════ NAVBAR ══════════════════════════════ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Inicio", href: "#hero" },
    { label: "Conóceme", href: "#about" },
    { label: "Servicios", href: "#servicios" },
    { label: "¿Cómo funciona?", href: "#proceso" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Blog", href: "#blog" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        boxShadow: scrolled ? "0 2px 24px rgba(114,89,163,0.10)" : "none",
        transition: "all 0.3s",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="#hero">
          <img src={LOGO} alt="Bedtime Journey" style={{ height: 144, objectFit: "contain" }} />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{ fontFamily: "Lato, sans-serif", fontSize: 14, fontWeight: 600, color: scrolled ? "#2E2E3A" : "#fff", textDecoration: "none", letterSpacing: 0.3, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#7259A3")}
                onMouseLeave={e => (e.currentTarget.style.color = scrolled ? "#2E2E3A" : "#fff")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden md:block"
          style={{ background: "linear-gradient(135deg,#7259A3,#A794CA)", color: "#fff", padding: "10px 24px", borderRadius: 50, fontSize: 14, fontWeight: 700, textDecoration: "none", fontFamily: "Lato, sans-serif", transition: "opacity 0.2s", boxShadow: "0 4px 16px rgba(114,89,163,0.35)" }}
        >
          ¡Reserva una consulta!
        </a>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden" style={{ background: "none", border: "none", cursor: "pointer", color: scrolled ? "#7259A3" : "#fff" }}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#fff", padding: "20px 24px 32px", borderTop: "1px solid #e8e4f0" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "12px 0", fontFamily: "Lato, sans-serif", fontSize: 16, fontWeight: 600, color: "#2E2E3A", textDecoration: "none", borderBottom: "1px solid #f0ebff" }}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)}
            style={{ display: "block", marginTop: 20, background: "linear-gradient(135deg,#7259A3,#A794CA)", color: "#fff", padding: "14px 28px", borderRadius: 50, fontSize: 15, fontWeight: 700, textDecoration: "none", textAlign: "center" }}>
            ¡Reserva una consulta!
          </a>
        </div>
      )}
    </header>
  );
}

/* ══════════════════════════════ HERO ══════════════════════════════ */
function Hero() {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMAGES.hero})`, backgroundSize: "cover", backgroundPosition: "center 30%", zIndex: 0 }} />
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
            ✨ Coaching de Sueño Infantil
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
            <span className="hero-line">Te acompañamos en el</span>
            <em className="hero-line" style={{ fontStyle: "italic", color: "#A794CA" }}>viaje hacia el descanso</em>
            <span className="hero-line">de toda tu familia</span>
          </motion.h1>
        </div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          style={{ fontFamily: "Lato, sans-serif", fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.85)", maxWidth: 560, margin: "0 auto 44px", lineHeight: 1.75 }}>
          Con ciencia, apego y corazón de docente, ayudo a bebés de 0 a 5 años a desarrollar hábitos de sueño saludables — para que toda la familia descanse y florezca.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#servicios"
            style={{ background: "linear-gradient(135deg,#7259A3,#A794CA)", color: "#fff", padding: "16px 36px", borderRadius: 50, fontSize: 16, fontWeight: 700, textDecoration: "none", fontFamily: "Lato, sans-serif", boxShadow: "0 8px 32px rgba(114,89,163,0.5)", transition: "transform 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
            Ver mis servicios
          </a>
          <a href="#about"
            style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", padding: "16px 36px", borderRadius: 50, fontSize: 16, fontWeight: 700, textDecoration: "none", fontFamily: "Lato, sans-serif", backdropFilter: "blur(4px)", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}>
            Conóceme
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          style={{ marginTop: 80, display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {[["❤️", "Crianza con apego"], ["3 semanas", "Acompañamiento real"], ["0–5 años", "Edades atendidas"], ["100%", "Personalizado"]].map(([n, l]) => (
            <div key={n} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Loubag', serif", fontSize: 32, fontWeight: 600, color: "#A794CA" }}>{n}</div>
              <div style={{ fontFamily: "Lato, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <a href="#about" style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 3, animation: "float 2s ease-in-out infinite alternate", color: "rgba(255,255,255,0.6)" }}>
        <ChevronDown size={32} />
      </a>
    </section>
  );
}

/* ══════════════════════════════ ABOUT ══════════════════════════════ */
function About() {
  return (
    <section id="about" style={{ background: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ position: "relative" }}>
          <div style={{ borderRadius: "32px 32px 32px 8px", overflow: "hidden", boxShadow: "0 24px 60px rgba(114,89,163,0.2)" }}>
            <img src={IMAGES.about} alt="Mariale Muñoz con bebé" style={{ width: "100%", height: 520, objectFit: "cover", objectPosition: "center top", display: "block" }} />
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
            Un corazón de docente<br />
            <em style={{ fontStyle: "italic", color: "#7259A3" }}>detrás del viaje</em>
          </h2>
          <div style={{ width: 56, height: 3, background: "#7259A3", borderRadius: 2, marginBottom: 32 }} />

          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 16, lineHeight: 1.85, color: "#555", marginBottom: 20 }}>
            Soy una <strong style={{ color: "#4A5F8A" }}>educadora especial</strong> que quiso ampliar los contextos donde el conocimiento sobre la infancia podía aportar más allá de un centro educativo. Además soy esposa y en este momento estoy descubriendo una nueva faceta como <strong style={{ color: "#7259A3" }}>Coach de Sueño Infantil.</strong>
          </p>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 16, lineHeight: 1.85, color: "#555", marginBottom: 32 }}>
            Espero llegar a ser esa mano amiga, guía y compañía en los momentos de cansancio de muchas mamás y papás que quieren lo mejor para sus hijos y buscan un cambio hacia ser una familia más feliz.
          </p>

          <blockquote style={{ borderLeft: "4px solid #D0A3CB", paddingLeft: 24, marginBottom: 36, fontFamily: "Lato, sans-serif", fontSize: 17, fontStyle: "italic", color: "#4A5F8A", lineHeight: 1.8 }}>
            "Acompañar a tu bebé a desarrollar una nueva habilidad es todo un viaje, lleno de retos, ilusión, esperanza de un mejor dormir para todos… pero que prometo puede llegar a un lugar de calma."
            <br /><strong style={{ fontStyle: "normal", fontSize: 14, color: "#7259A3", display: "block", marginTop: 10 }}>— Mariale Muñoz</strong>
          </blockquote>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { icon: <BookOpen size={18} />, label: "Educación Especial" },
              { icon: <Moon size={18} />, label: "Coach de Sueño" },
              { icon: <Heart size={18} />, label: "Crianza con Apego" },
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
}

/* ══════════════════════════════ POR QUÉ ══════════════════════════════ */
function WhyUs() {
  const reasons = [
    { emoji: "🎓", title: "Educadora, no solo Coach", desc: "Mi formación en educación especial transforma el proceso: no solo resuelvo el problema de hoy, sino que capacito a los padres para el mañana.", color: "#7259A3" },
    { emoji: "💌", title: "Acompañamiento Real", desc: "Tres semanas al lado de tu familia, todos los días. No un PDF que nunca leerás — una guía que camina contigo en cada paso del proceso.", color: "#4A5F8A" },
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
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
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
}

/* ══════════════════════════════ SERVICIOS ══════════════════════════════ */
function Servicios() {
  const services = [
    {
      tag: "Más popular",
      icon: "🌙",
      name: "Asesoría Bedtime Journey",
      ages: "5 meses – 5 años",
      price: "$280",
      extra: "+ $50 semana adicional",
      color: "#7259A3",
      gradient: "linear-gradient(135deg,#7259A3,#A794CA)",
      featured: true,
      includes: [
        "Llamada inicial para establecer metas",
        "Plan personalizado a tu familia",
        "3 semanas de acompañamiento diario",
        "Todos los días de la semana",
        "Semana adicional disponible ($50)",
      ],
    },
    {
      icon: "⭐",
      name: "Sesión Consulta",
      ages: "5 meses – 5 años",
      price: "$60",
      extra: "Sesión única",
      color: "#4A5F8A",
      gradient: "linear-gradient(135deg,#4A5F8A,#85A5D4)",
      featured: false,
      includes: [
        "Llamada de indagación (20 min)",
        "Sesión de 1 hora completa",
        "Plan de sueño personalizado",
        "Orientación práctica inmediata",
      ],
    },
    {
      icon: "🍼",
      name: "The Journey Begin",
      ages: "Recién nacidos 0 – 5 meses",
      price: "$80",
      extra: "Para los primeros meses",
      color: "#85A5D4",
      gradient: "linear-gradient(135deg,#85A5D4,#A794CA)",
      featured: false,
      includes: [
        "Llamada de indagación (20 min)",
        "Sesión de 1 hora",
        "Aprende sobre el sueño de tu RN",
        "Buenos hábitos desde el inicio",
        "Guía para la siguiente etapa",
      ],
    },
    {
      icon: "📖",
      name: "Guías Digitales",
      ages: "Todos los padres",
      price: "$30",
      extra: "Descarga inmediata",
      color: "#D0A3CB",
      gradient: "linear-gradient(135deg,#D0A3CB,#A794CA)",
      featured: false,
      includes: [
        "Material educativo de calidad",
        "Datos curiosos sobre el sueño",
        "Estrategias prácticas",
        "Acceso inmediato",
      ],
    },
  ];

  return (
    <section id="servicios" style={{ background: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{ fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#7259A3", display: "block", marginBottom: 16 }}>
            Nuestros Servicios
          </span>
          <h2 style={{ fontFamily: "'Loubag', serif", fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 400, color: "#2E2E3A", lineHeight: 1.25 }}>
            El plan perfecto<br /><em style={{ fontStyle: "italic", color: "#7259A3" }}>para tu familia</em>
          </h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
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
                transition: "transform 0.25s",
              }}
              whileHover={{ y: -6 }}>

              {s.tag && (
                <span style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 50, padding: "4px 14px", fontSize: 11, fontFamily: "Lato, sans-serif", fontWeight: 700, color: s.featured ? "#fff" : s.color, letterSpacing: 1 }}>
                  {s.tag}
                </span>
              )}

              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <div style={{ fontFamily: "Lato, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: s.featured ? "rgba(255,255,255,0.75)" : s.color, marginBottom: 8 }}>
                {s.ages}
              </div>
              <h3 style={{ fontFamily: "'Loubag', serif", fontSize: 22, color: s.featured ? "#fff" : "#2E2E3A", marginBottom: 16, lineHeight: 1.3 }}>
                {s.name}
              </h3>
              <div style={{ fontFamily: "'Loubag', serif", fontSize: 48, color: s.featured ? "#fff" : s.color, fontWeight: 600, lineHeight: 1, marginBottom: 4 }}>
                {s.price}
              </div>
              <div style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: s.featured ? "rgba(255,255,255,0.7)" : "#888", marginBottom: 28 }}>
                {s.extra}
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {s.includes.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Lato, sans-serif", fontSize: 14, color: s.featured ? "rgba(255,255,255,0.9)" : "#555", padding: "6px 0", lineHeight: 1.5 }}>
                    <Check size={16} style={{ flexShrink: 0, marginTop: 2, color: s.featured ? "rgba(255,255,255,0.9)" : "#7259A3" }} />
                    {item}
                  </li>
                ))}
              </ul>

              <a href="#contacto"
                style={{ display: "block", textAlign: "center", background: s.featured ? "rgba(255,255,255,0.2)" : s.gradient, border: s.featured ? "2px solid rgba(255,255,255,0.5)" : "none", color: "#fff", padding: "14px 28px", borderRadius: 50, fontFamily: "Lato, sans-serif", fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                Quiero este plan →
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Charlas */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          style={{ marginTop: 32, background: "linear-gradient(135deg,#2E2145,#4A5F8A)", borderRadius: 24, padding: "36px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#A794CA", marginBottom: 8 }}>Charlas Educativas</div>
            <h3 style={{ fontFamily: "'Loubag', serif", fontSize: 26, color: "#fff" }}>Talleres para grupos de padres</h3>
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.75)", marginTop: 8, lineHeight: 1.6 }}>Charlas personalizadas para comunidades, empresas y grupos de crianza sobre sueño infantil y hábitos saludables.</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Loubag', serif", fontSize: 52, color: "#A794CA", fontWeight: 600 }}>$200</div>
            <a href="#contacto" style={{ display: "inline-block", marginTop: 12, background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "12px 28px", borderRadius: 50, fontFamily: "Lato, sans-serif", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              Solicitar información
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════ PROCESO ══════════════════════════════ */
function Proceso() {
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
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
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
}

/* ══════════════════════════════ TESTIMONIOS ══════════════════════════════ */
function Testimonios() {
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
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
          {testimonials.map(({ name, baby, text, stars }) => (
            <motion.div key={name} variants={fade}
              style={{ background: "#fff", borderRadius: 24, padding: "40px 32px", border: "1px solid #e8e4f0", boxShadow: "0 8px 32px rgba(114,89,163,0.08)" }}
              whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(114,89,163,0.15)" }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                {[...Array(stars)].map((_, i) => <Star key={i} size={18} fill="#D0A3CB" color="#D0A3CB" />)}
              </div>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 28, fontStyle: "italic" }}>
                "{text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#A794CA,#D0A3CB)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                  👩
                </div>
                <div>
                  <div style={{ fontFamily: "Lato, sans-serif", fontSize: 15, fontWeight: 700, color: "#2E2E3A" }}>{name}</div>
                  <div style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#888" }}>{baby}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════ BLOG ══════════════════════════════ */
function Blog() {
  const navigate = useNavigate();

  return (
    <section id="blog" style={{ background: "#fff", padding: "100px 24px" }}>
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
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
          {BLOG_ARTICLES.map((article) => (
            <motion.div key={article.id} variants={fade}
              onClick={() => navigate(`/blog/${article.id}`)}
              style={{ borderRadius: 20, overflow: "hidden", background: "#fff", border: "1px solid #e8e4f0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", cursor: "pointer" }}
              whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(114,89,163,0.15)" }}>
              <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
                <img src={article.image} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.07)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════ CTA SECTION ══════════════════════════════ */
function CtaSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "100px 24px" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMAGES.cta})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
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
}

/* ══════════════════════════════ CONTACTO ══════════════════════════════ */
function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", baby: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const sheetsUrl = import.meta.env.VITE_SHEETS_URL;
      if (sheetsUrl) {
        await fetch(sheetsUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({
            date: new Date().toLocaleString("es-CR"),
            name: form.name,
            email: form.email,
            whatsapp: form.whatsapp || "",
            baby: form.baby,
            message: form.message,
          }),
        });
      }
    } catch (err) {
      console.error("Error enviando a Sheets:", err);
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 18px", borderRadius: 12, border: "1.5px solid #e8e4f0",
    fontFamily: "Lato, sans-serif", fontSize: 15, color: "#2E2E3A", background: "#F7F4F0",
    outline: "none", boxSizing: "border-box", transition: "border-color 0.2s",
  };

  return (
    <section id="contacto" style={{ background: "#F7F4F0", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <span style={{ fontFamily: "Lato, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#7259A3", display: "block", marginBottom: 16 }}>
            Contáctame
          </span>
          <h2 style={{ fontFamily: "'Loubag', serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 400, color: "#2E2E3A", lineHeight: 1.25, marginBottom: 20 }}>
            Empieza tu<br /><em style={{ fontStyle: "italic", color: "#7259A3" }}>Bedtime Journey</em>
          </h2>
          <div style={{ width: 56, height: 3, background: "#7259A3", borderRadius: 2, marginBottom: 32 }} />

          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 16, color: "#555", lineHeight: 1.85, marginBottom: 40 }}>
            Da el primer paso hacia las noches tranquilas. Cuéntame un poco sobre tu bebé y juntos encontraremos el mejor camino para tu familia.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { icon: <Instagram size={20} color="#7259A3" />, label: "Instagram", val: "@bedtimejourney.by.mari", href: "https://instagram.com/bedtimejourney.by.mari" },
              { icon: <Mail size={20} color="#7259A3" />, label: "Email", val: "mariale@bedtimejourney.com", href: "mailto:mariale@bedtimejourney.com" },
              { icon: <Phone size={20} color="#7259A3" />, label: "WhatsApp", val: "Escríbeme directamente", href: "#contacto" },
            ].map(({ icon, label, val, href }) => (
              <a key={label} href={href} style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(114,89,163,0.12)" }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#aaa", letterSpacing: 1 }}>{label}</div>
                  <div style={{ fontFamily: "Lato, sans-serif", fontSize: 15, fontWeight: 600, color: "#2E2E3A" }}>{val}</div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 44, background: "linear-gradient(135deg,#EEE1CF,#fff)", borderRadius: 20, padding: "24px 28px", border: "1px solid rgba(167,148,202,0.3)" }}>
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 14, color: "#4A5F8A", lineHeight: 1.75, fontStyle: "italic" }}>
              "No hay viaje demasiado difícil cuando llevas la guía correcta y el corazón puesto en llegar." 🌙
            </p>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          style={{ background: "#fff", borderRadius: 24, padding: "44px 40px", boxShadow: "0 16px 48px rgba(114,89,163,0.12)", border: "1px solid #e8e4f0" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: 64, marginBottom: 20 }}>🌙</div>
              <h3 style={{ fontFamily: "'Loubag', serif", fontSize: 28, color: "#7259A3", marginBottom: 16 }}>¡Mensaje enviado!</h3>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 16, color: "#555", lineHeight: 1.75 }}>Te responderé muy pronto. ¡El viaje hacia el descanso está a punto de comenzar! ✨</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <h3 style={{ fontFamily: "'Loubag', serif", fontSize: 26, color: "#2E2E3A", marginBottom: 8 }}>Cuéntame tu historia 💜</h3>
              <input style={inputStyle} placeholder="Tu nombre completo" value={form.name} required
                onChange={e => setForm({ ...form, name: e.target.value })}
                onFocus={e => (e.target.style.borderColor = "#7259A3")}
                onBlur={e => (e.target.style.borderColor = "#e8e4f0")} />
              <input style={inputStyle} type="email" placeholder="Correo electrónico" value={form.email} required
                onChange={e => setForm({ ...form, email: e.target.value })}
                onFocus={e => (e.target.style.borderColor = "#7259A3")}
                onBlur={e => (e.target.style.borderColor = "#e8e4f0")} />
              <input style={inputStyle} placeholder="WhatsApp (con código de país)" value={form.whatsapp}
                onChange={e => setForm({ ...form, whatsapp: e.target.value })}
                onFocus={e => (e.target.style.borderColor = "#7259A3")}
                onBlur={e => (e.target.style.borderColor = "#e8e4f0")} />
              <select style={{ ...inputStyle, appearance: "none" }} value={form.baby} required
                onChange={e => setForm({ ...form, baby: e.target.value })}
                onFocus={e => (e.target.style.borderColor = "#7259A3")}
                onBlur={e => (e.target.style.borderColor = "#e8e4f0")}>
                <option value="">Edad de tu bebé 👶</option>
                <option value="0-5m">Recién nacido (0–5 meses)</option>
                <option value="5-12m">5–12 meses</option>
                <option value="1-2a">1–2 años</option>
                <option value="2-3a">2–3 años</option>
                <option value="3-5a">3–5 años</option>
              </select>
              <textarea style={{ ...inputStyle, height: 120, resize: "vertical" }} placeholder="Cuéntame brevemente la situación de sueño de tu bebé…"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                onFocus={e => (e.target.style.borderColor = "#7259A3")}
                onBlur={e => (e.target.style.borderColor = "#e8e4f0")} />
              <button type="submit" disabled={loading}
                style={{ background: "linear-gradient(135deg,#7259A3,#A794CA)", color: "#fff", padding: "16px 32px", borderRadius: 50, fontFamily: "Lato, sans-serif", fontSize: 16, fontWeight: 700, border: "none", cursor: loading ? "wait" : "pointer", boxShadow: "0 8px 28px rgba(114,89,163,0.4)", transition: "transform 0.2s", opacity: loading ? 0.75 : 1 }}
                onMouseEnter={e => !loading && (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                {loading ? "Enviando… 🌙" : "✨ Enviar mensaje"}
              </button>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#aaa", textAlign: "center" }}>
                Prometemos no enviarte spam. Solo amor y buenas noches. 🌙
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════ FOOTER ══════════════════════════════ */
function Footer() {
  return (
    <footer style={{ background: "linear-gradient(135deg,#2E2145,#4A5F8A)", padding: "60px 24px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }} className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-12">
          <div>
            <img src={LOGO_CREMA} alt="Bedtime Journey" style={{ height: 156, marginBottom: 20 }} />
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: 320 }}>
              Acompañando a cada familia en el viaje hacia el descanso — con ciencia, apego y corazón de docente.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {[
                { icon: <Instagram size={20} />, href: "https://instagram.com/bedtimejourney.by.mari" },
                { icon: <Facebook size={20} />, href: "https://facebook.com" },
              ].map(({ icon, href }, i) => (
                <a key={i} href={href} style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(167,148,202,0.4)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Loubag', serif", fontSize: 18, color: "#fff", marginBottom: 20 }}>Servicios</h4>
            {["Asesoría Bedtime Journey", "Sesión Consulta", "The Journey Begin", "Guías Digitales", "Charlas Educativas"].map(s => (
              <a key={s} href="#servicios" style={{ display: "block", fontFamily: "Lato, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", textDecoration: "none", padding: "5px 0", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#A794CA")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}>
                {s}
              </a>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: "'Loubag', serif", fontSize: 18, color: "#fff", marginBottom: 20 }}>Navegación</h4>
            {["Inicio", "Conóceme", "¿Cómo funciona?", "Testimonios", "Blog", "Contacto"].map((l, i) => (
              <a key={l} href={["#hero", "#about", "#proceso", "#testimonios", "#blog", "#contacto"][i]}
                style={{ display: "block", fontFamily: "Lato, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", textDecoration: "none", padding: "5px 0", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#A794CA")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}>
                {l}
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 28, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
            © 2025 Bedtime Journey by Mariale Muñoz · Todos los derechos reservados.
          </p>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
            Hecho con 💜 para las familias que buscan la calma
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════ WHATSAPP BUBBLE ══════════════════════════════ */
function WhatsAppBubble() {
  const phone = "50686489507";
  const msg = encodeURIComponent(
    "¡Hola Mariale! 👋 Vi tu página de Bedtime Journey y me gustaría saber más sobre tus servicios."
  );

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%   { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.45); }
          70%  { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 18px rgba(37,211,102,0); }
          100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
      <a
        href={`https://wa.me/${phone}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Escríbeme por WhatsApp"
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 9999,
          width: 60, height: 60, borderRadius: "50%",
          background: "#25D366",
          display: "flex", alignItems: "center", justifyContent: "center",
          textDecoration: "none",
          animation: "waPulse 2.5s ease-in-out infinite",
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.12)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}

/* ══════════════════════════════ PAGE ══════════════════════════════ */
const Index = () => {
  return (
    <div style={{ fontFamily: "Lato, sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Servicios />
      <Proceso />
      <Testimonios />
      <Blog />
      <CtaSection />
      <Contacto />
      <Footer />
      <WhatsAppBubble />
    </div>
  );
};

export default Index;
