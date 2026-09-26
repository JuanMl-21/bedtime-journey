import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone, AlertCircle, CheckCircle2 } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

interface ContactoProps {
  initialService?: string;
}

export const Contacto = React.memo(function Contacto({ initialService = "" }: ContactoProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    baby: "",
    service: initialService,
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (initialService) {
      setForm((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
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
            service: form.service || "Consulta general",
            message: form.message,
          }),
        });
      }
      setSent(true);
    } catch (err) {
      console.error("Error enviando consulta:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 18px", borderRadius: 12, border: "1.5px solid #e8e4f0",
    fontFamily: "Lato, sans-serif", fontSize: 15, color: "#2E2E3A", background: "#F7F4F0",
    outline: "none", boxSizing: "border-box", transition: "border-color 0.2s",
  };

  const whatsappDirectUrl = "https://wa.me/50686489507?text=" + encodeURIComponent("¡Hola Mariale! 👋 Quisiera información sobre el acompañamiento de sueño infantil.");

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
              { icon: <Instagram size={20} color="#7259A3" />, label: "Instagram", val: "@bedtimejourneycr", href: "https://instagram.com/bedtimejourneycr" },
              { icon: <Mail size={20} color="#7259A3" />, label: "Email", val: "mariale.bedtime@gmail.com", href: "mailto:mariale.bedtime@gmail.com" },
              { icon: <Phone size={20} color="#7259A3" />, label: "WhatsApp Directo", val: "+506 8648 9507", href: whatsappDirectUrl },
            ].map(({ icon, label, val, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none" }}>
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
              <CheckCircle2 size={56} color="#7259A3" style={{ marginBottom: 16, display: "inline-block" }} />
              <h3 style={{ fontFamily: "'Loubag', serif", fontSize: 28, color: "#7259A3", marginBottom: 16 }}>¡Mensaje recibido con éxito!</h3>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 16, color: "#555", lineHeight: 1.75, marginBottom: 24 }}>
                Gracias por ponerte en contacto. Mariale te responderá muy pronto a través de WhatsApp o correo electrónico. ¡El viaje hacia el descanso está a punto de comenzar! ✨
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", whatsapp: "", baby: "", service: "", message: "" }); }}
                style={{ background: "#7259A3", color: "#fff", border: "none", padding: "12px 28px", borderRadius: 50, fontFamily: "Lato, sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <h3 style={{ fontFamily: "'Loubag', serif", fontSize: 26, color: "#2E2E3A", marginBottom: 4 }}>Cuéntame tu historia 💜</h3>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 14, color: "#666", marginBottom: 12 }}>
                Educadora especial y coach de sueño infantil. Respuesta en menos de 24 horas.
              </p>

              {error && (
                <div style={{ background: "#FFF5F5", border: "1px solid #FEB2B2", borderRadius: 12, padding: "14px 16px", color: "#C53030", fontSize: 14, fontFamily: "Lato, sans-serif", display: "flex", alignItems: "center", gap: 10 }}>
                  <AlertCircle size={20} style={{ flexShrink: 0 }} />
                  <div>
                    Hubo un problema al enviar la consulta. Por favor escríbeme directamente por <a href={whatsappDirectUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#C53030", fontWeight: 700, textDecoration: "underline" }}>WhatsApp aquí</a>.
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="contact-name" style={{ display: "block", fontFamily: "Lato, sans-serif", fontSize: 13, fontWeight: 700, color: "#4A5F8A", marginBottom: 6 }}>
                  Nombre completo *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  aria-label="Tu nombre completo"
                  autoComplete="name"
                  style={inputStyle}
                  placeholder="Ej: Laura Morales"
                  value={form.name}
                  required
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  onFocus={e => (e.target.style.borderColor = "#7259A3")}
                  onBlur={e => (e.target.style.borderColor = "#e8e4f0")}
                />
              </div>

              <div>
                <label htmlFor="contact-email" style={{ display: "block", fontFamily: "Lato, sans-serif", fontSize: 13, fontWeight: 700, color: "#4A5F8A", marginBottom: 6 }}>
                  Correo electrónico *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  aria-label="Correo electrónico"
                  autoComplete="email"
                  style={inputStyle}
                  placeholder="ejemplo@correo.com"
                  value={form.email}
                  required
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  onFocus={e => (e.target.style.borderColor = "#7259A3")}
                  onBlur={e => (e.target.style.borderColor = "#e8e4f0")}
                />
              </div>

              <div>
                <label htmlFor="contact-whatsapp" style={{ display: "block", fontFamily: "Lato, sans-serif", fontSize: 13, fontWeight: 700, color: "#4A5F8A", marginBottom: 6 }}>
                  WhatsApp (con código de país)
                </label>
                <input
                  id="contact-whatsapp"
                  name="whatsapp"
                  type="tel"
                  aria-label="WhatsApp (con código de país)"
                  autoComplete="tel"
                  style={inputStyle}
                  placeholder="Ej: +506 8888 8888"
                  value={form.whatsapp}
                  onChange={e => setForm({ ...form, whatsapp: e.target.value })}
                  onFocus={e => (e.target.style.borderColor = "#7259A3")}
                  onBlur={e => (e.target.style.borderColor = "#e8e4f0")}
                />
              </div>

              <div>
                <label htmlFor="contact-service" style={{ display: "block", fontFamily: "Lato, sans-serif", fontSize: 13, fontWeight: 700, color: "#4A5F8A", marginBottom: 6 }}>
                  Servicio de tu interés
                </label>
                <select
                  id="contact-service"
                  name="service"
                  aria-label="Servicio de tu interés"
                  style={{ ...inputStyle, appearance: "none" }}
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  onFocus={e => (e.target.style.borderColor = "#7259A3")}
                  onBlur={e => (e.target.style.borderColor = "#e8e4f0")}
                >
                  <option value="">Selecciona una opción...</option>
                  <option value="Asesoría Bedtime Journey ($280)">Asesoría Bedtime Journey ($280 - 3 semanas de acompañamiento)</option>
                  <option value="Consulta Bedtime Journey ($60)">Consulta Bedtime Journey ($60 - Plan + sesión 1 hora)</option>
                  <option value="The Journey Begin ($80)">The Journey Begin ($80 - Recién nacidos 0–5 meses)</option>
                  <option value="Talleres para Padres">Talleres para Padres y comunidades educativas</option>
                  <option value="Consulta general">Consulta general u otra inquietud</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-baby-age" style={{ display: "block", fontFamily: "Lato, sans-serif", fontSize: 13, fontWeight: 700, color: "#4A5F8A", marginBottom: 6 }}>
                  Edad de tu bebé *
                </label>
                <select
                  id="contact-baby-age"
                  name="baby"
                  aria-label="Edad de tu bebé"
                  style={{ ...inputStyle, appearance: "none" }}
                  value={form.baby}
                  required
                  onChange={e => setForm({ ...form, baby: e.target.value })}
                  onFocus={e => (e.target.style.borderColor = "#7259A3")}
                  onBlur={e => (e.target.style.borderColor = "#e8e4f0")}
                >
                  <option value="">Selecciona la edad de tu bebé 👶</option>
                  <option value="0-5m">Recién nacido (0–5 meses)</option>
                  <option value="5-12m">5–12 meses</option>
                  <option value="1-2a">1–2 años</option>
                  <option value="2-3a">2–3 años</option>
                  <option value="3-5a">3–5 años</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" style={{ display: "block", fontFamily: "Lato, sans-serif", fontSize: 13, fontWeight: 700, color: "#4A5F8A", marginBottom: 6 }}>
                  ¿Qué está ocurriendo con el sueño de tu bebé?
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  aria-label="Mensaje o situación de sueño de tu bebé"
                  style={{ ...inputStyle, height: 110, resize: "vertical" }}
                  placeholder="Cuéntame brevemente cuántos despertares tiene, siestas o tu mayor reto actual..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  onFocus={e => (e.target.style.borderColor = "#7259A3")}
                  onBlur={e => (e.target.style.borderColor = "#e8e4f0")}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                aria-label="Enviar mi consulta"
                style={{
                  background: "linear-gradient(135deg,#7259A3,#A794CA)",
                  color: "#fff",
                  padding: "16px 32px",
                  borderRadius: 50,
                  fontFamily: "Lato, sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  border: "none",
                  minHeight: 48,
                  cursor: loading ? "wait" : "pointer",
                  boxShadow: "0 8px 28px rgba(114,89,163,0.4)",
                  transition: "transform 0.2s",
                  opacity: loading ? 0.75 : 1
                }}
                onMouseEnter={e => !loading && (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {loading ? "Enviando tu consulta… 🌙" : "✨ Enviar mi consulta"}
              </button>

              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#777", textAlign: "center", lineHeight: 1.5, marginTop: 4 }}>
                🔒 Usaremos tus datos exclusivamente para responder a tu consulta. Respetamos tu privacidad y puedes solicitar la eliminación de tu información en cualquier momento.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
});
