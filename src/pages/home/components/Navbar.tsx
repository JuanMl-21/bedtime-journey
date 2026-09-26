import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO = "/images/logo-morado.svg";

export const Navbar = React.memo(function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Inicio", href: "#hero" },
    { label: "Conóceme", href: "#about" },
    { label: "Servicios", href: "#servicios" },
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
      <nav aria-label="Navegación principal" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="#hero" aria-label="Ir a inicio de Bedtime Journey">
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
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: scrolled ? "#7259A3" : "#fff",
            minWidth: 44,
            minHeight: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 8
          }}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-nav-menu" style={{ background: "#fff", padding: "20px 24px 32px", borderTop: "1px solid #e8e4f0" }}>
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
});
