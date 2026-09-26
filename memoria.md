# Memoria del Proyecto — Bedtime Journey
> Última actualización: Mayo 2026

---

## ¿Qué es este proyecto?
Landing page para **Mariale**, coach de sueño infantil. Construida con React + TypeScript + Vite + Tailwind CSS v4 + ShadCN UI + Framer Motion.

---

## Stack tecnológico
| Tecnología | Uso |
|---|---|
| React 18 + TypeScript | Framework principal |
| Vite 5.4 | Bundler |
| Tailwind CSS v4 | Estilos |
| ShadCN UI | Componentes base |
| Framer Motion | Animaciones |
| React Router DOM (MemoryRouter) | Navegación entre páginas |
| Google Sheets (Apps Script) | Backend del formulario de contacto |

---

## Estructura del proyecto
```
src/
├── App.tsx                        # Rutas principales (MemoryRouter + React.lazy)
├── pages/
│   ├── home/
│   │   ├── Index.tsx              # Punto de entrada de Home
│   │   └── components/            # Componentes modulares (Navbar, Hero, About, Servicios, etc.)
│   ├── blog/BlogPost.tsx          # Página individual de artículo
│   └── not-found/Index.tsx        # 404
├── data/
│   └── blogData.ts                # Artículos del blog
public/
├── images/
│   ├── logo-morado.svg
│   └── logo-crema.svg
├── fonts/
│   └── loubag-semi-bold.ttf       # Tipografía de marca
└── favicon.svg                    # Logo morado como favicon
build-standalone.cjs               # Script para generar HTML único compartible
```

---

## Secciones de la landing page
1. **Navbar** — Fijo con blur al hacer scroll, menú hamburguesa en mobile
2. **Hero** — Imagen de fondo, título animado, botones CTA, estadísticas
3. **Conóceme** — Foto + texto sobre Mariale
4. **Servicios** — Cards con los 3 paquetes de coaching
5. **¿Cómo funciona?** — Proceso paso a paso
6. **Testimonios** — Carrusel de reseñas
7. **Blog** — 3 artículos clickeables con navegación a página completa
8. **CTA** — Sección final con llamado a la acción
9. **Contacto** — Formulario conectado a Google Sheets
10. **Footer** — Links, redes sociales, copyright

---

## Blog
- **3 artículos reales** con información científica verificada y referencias académicas reales
- Autores citados: Mindell, Sadeh, Tikotzky, Gradisar, Price, Hall, Paruthi
- Revistas: *Sleep*, *Pediatrics*, *Child Development*, *BMC Pediatrics*, *Journal of Clinical Sleep Medicine*

### Artículos
1. **"Por qué tu bebé se despierta cada hora"** — Ciclos de sueño, asociaciones, estrategias
2. **"El método de extinción gradual: qué dice la ciencia realmente"** — Ferber, evidencia, opciones
3. **"Rutinas de sueño para bebés de 0 a 5 años: guía completa por edad"** — Por etapas de desarrollo

### Navegación entre artículos
Cada artículo tiene:
- Navbar con botón "← Volver al inicio"
- Bloque inferior con "Volver al inicio" + "Siguiente artículo →"

---

## Decisiones técnicas importantes

### MemoryRouter (no BrowserRouter)
Se usa `MemoryRouter` en lugar de `BrowserRouter` porque:
- El sitio se comparte también como HTML standalone (`file://`)
- `BrowserRouter` fallaba al navegar a rutas ya que el path del archivo no era `/`
- `MemoryRouter` ignora la URL real del navegador, siempre arranca en `/`

### HTML standalone (`bedtime-journey-preview.html`)
Script `build-standalone.cjs` que:
1. Inlinea el CSS completo
2. Convierte la fuente Loubag a base64
3. Convierte los logos SVG a data URIs
4. Inlinea el JS al final del `<body>` (no `<head>` — defer no funciona en scripts inline)
5. Inlinea el favicon
- **Resultado:** un solo archivo HTML de ~926 KB que funciona sin servidor

### Responsive hero title
- CSS media queries con clases `.hero-title` y `.hero-line`
- Escala de 20px (mobile) a 52px (desktop)
- `white-space: nowrap` solo en `md+` para evitar overflow en mobile

### Formulario de contacto
- Conectado a Google Sheets vía Apps Script (`VITE_SHEETS_URL` en `.env`)
- Campos: nombre, email, WhatsApp, edad del bebé, mensaje

---

## URLs en producción
| | |
|---|---|
| 🌐 **Sitio en vivo** | https://bedtime-journey.vercel.app |
| 📦 **Repositorio GitHub** | https://github.com/JuanMl-21/bedtime-journey |
| 📊 **Dashboard Vercel** | vercel.com → proyecto `bedtime-journey` |

---

## Cómo publicar cambios
```bash
git add .
git commit -m "descripción del cambio"
git push origin main
```
Vercel detecta el push y redespliega en ~1 minuto automáticamente.

---

## Cómo generar el HTML standalone para compartir
```bash
npm run build
node build-standalone.cjs
```
Genera `bedtime-journey-preview.html` en la raíz del proyecto.

---

## Pendientes
- [ ] **CMS con Notion** — Que Mariale pueda subir artículos sin tocar código
  - PDF con instrucciones paso a paso generado para Mariale: `Guia_Configuracion_Notion_CMS.pdf` ✅
  - Pendiente: Que Mariale cree su cuenta/tabla en Notion y comparta su API Key (`secret_...`).
- [ ] **CallMeBot WhatsApp** — Notificaciones a Mariale cuando llega un formulario
  - PDF con instrucciones para Mariale generado: `Guia_Configuracion_WhatsApp_CallMeBot.pdf` ✅
  - Pendiente: Que Mariale envíe el mensaje a CallMeBot, obtenga su API Key y se guarde en Apps Script.
- [ ] **Dominio personalizado** — Conectar dominio propio (ej: `bedtimejourney.com`) en Vercel → Settings → Domains

---

## Colores de marca
| Nombre | Hex |
|---|---|
| Morado principal | `#7259A3` |
| Morado claro | `#A794CA` |
| Morado oscuro | `#2E2133` |
| Crema / fondo | `#F7F4F0` |
| Texto oscuro | `#2E2E3A` |

## Tipografías
- **Loubag Semi Bold** — Títulos y headings (archivo local: `public/fonts/loubag-semi-bold.ttf`)
- **Lato** — Cuerpo de texto (Google Fonts)
