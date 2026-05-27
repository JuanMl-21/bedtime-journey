// build-standalone.js
// Genera un único HTML autónomo con todo inline
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');

let html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

// ── 1. Inline CSS ──────────────────────────────────────────────
const cssMatch = html.match(/href="\/assets\/(index-[^"]+\.css)"/);
if (cssMatch) {
  let css = fs.readFileSync(path.join(dist, 'assets', cssMatch[1]), 'utf8');

  // Convierte la fuente Loubag a base64
  const fontPath = path.join(dist, 'fonts', 'loubag-semi-bold.ttf');
  if (fs.existsSync(fontPath)) {
    const fontB64 = fs.readFileSync(fontPath).toString('base64');
    css = css.replaceAll(
      'url(/fonts/loubag-semi-bold.ttf)',
      `url(data:font/truetype;base64,${fontB64})`
    );
    console.log('✓ Fuente Loubag inlinada como base64');
  }

  // Usar función para evitar que $& $' $` se interpreten como patrones especiales
  const cssTag = `<style>${css}</style>`;
  html = html.replace(
    `<link rel="stylesheet" crossorigin href="/assets/${cssMatch[1]}">`,
    () => cssTag
  );
  console.log('✓ CSS inlinado');
}

// ── 2. Inline JS ───────────────────────────────────────────────
const jsMatch = html.match(/src="\/assets\/(index-[^"]+\.js)"/);
if (jsMatch) {
  let js = fs.readFileSync(path.join(dist, 'assets', jsMatch[1]), 'utf8');

  // Convierte logos SVG a data URIs dentro del JS
  const svgs = [
    { key: '/images/logo-morado.svg', file: 'logo-morado.svg' },
    { key: '/images/logo-crema.svg',  file: 'logo-crema.svg' },
  ];
  for (const { key, file } of svgs) {
    const svgContent = fs.readFileSync(path.join(dist, 'images', file), 'utf8');
    const encoded = 'data:image/svg+xml,' + encodeURIComponent(svgContent);
    js = js.replaceAll(`"${key}"`, `"${encoded}"`);
    console.log(`✓ Logo ${file} inlinado`);
  }

  // Escapar </script> dentro del JS para evitar que el parser HTML lo corte
  js = js.replaceAll('</script>', '<\\/script>');

  // Quitar type="module" para que funcione con file:// sin restricciones CORS
  // Usar función para evitar que $& $' $` del JS se interpreten como patrones especiales
  // Quitar el script del <head> y ponerlo al final del <body>
  // (defer no funciona en scripts inline — el script en head se ejecuta antes de que #root exista)
  html = html.replace(
    `<script type="module" crossorigin src="/assets/${jsMatch[1]}"></script>`,
    () => ''
  );
  // Micro-script que normaliza el path a '/' antes de que BrowserRouter arranque
  // (necesario cuando el archivo se abre directamente desde el sistema de archivos)
  const pathFix = `<script>(function(){try{if(window.location.pathname!=='/')window.history.pushState({},'','/')}catch(e){}})()</script>`;
  const scriptTag = `<script>${js}</script>`;
  html = html.replace('</body>', () => `${pathFix}\n${scriptTag}\n</body>`);
  console.log('✓ JS inlinado');
}

// ── 3. Inline favicon ──────────────────────────────────────────
const faviconSvg = fs.readFileSync(path.join(dist, 'favicon.svg'), 'utf8');
const faviconUri = 'data:image/svg+xml,' + encodeURIComponent(faviconSvg);
html = html
  .replace('href="/favicon.svg"',         `href="${faviconUri}"`)
  .replace(`href="/favicon.svg"`,         `href="${faviconUri}"`)   // apple-touch
  .replace('href="/favicon.ico"',         'href=""');
console.log('✓ Favicon inlinado');

// ── 4. Escribir el archivo ─────────────────────────────────────
const out = path.join(__dirname, 'bedtime-journey-preview.html');
fs.writeFileSync(out, html, 'utf8');

const kb = Math.round(fs.statSync(out).size / 1024);
console.log(`\n✅ Archivo generado: bedtime-journey-preview.html (${kb} KB)`);
console.log('   Ábrelo directamente en el navegador o compártelo por email/WhatsApp.');
