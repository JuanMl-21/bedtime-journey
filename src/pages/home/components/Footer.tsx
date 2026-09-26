import React from "react";
import { Instagram, Facebook } from "lucide-react";

const LOGO_CREMA = "/images/logo-crema.svg";

export const Footer = React.memo(function Footer() {
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
                { icon: <Instagram size={20} />, href: "https://instagram.com/bedtimejourneycr", label: "Instagram" },
                { icon: <Facebook size={20} />, href: "https://facebook.com", label: "Facebook" },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} aria-label={label} style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(167,148,202,0.4)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Loubag', serif", fontSize: 18, color: "#fff", marginBottom: 20 }}>Servicios</h4>
            {["Asesoría Bedtime Journey", "Consulta Bedtime Journey", "The Journey Begin", "Talleres para Padres"].map(s => (
              <a key={s} href="#servicios" style={{ display: "block", fontFamily: "Lato, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", textDecoration: "none", padding: "5px 0", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#A794CA")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}>
                {s}
              </a>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: "'Loubag', serif", fontSize: 18, color: "#fff", marginBottom: 20 }}>Navegación</h4>
            {["Inicio", "Conóceme", "Blog", "Contacto"].map((l, i) => (
              <a key={l} href={["#hero", "#about", "#blog", "#contacto"][i]}
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
});
