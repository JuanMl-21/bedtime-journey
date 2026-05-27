// ============================================================
// BEDTIME JOURNEY — Google Apps Script
// Recibe datos del formulario web, guarda en Sheets
// y envía notificación de WhatsApp a Mariale via CallMeBot
// ============================================================
//
// PARA ACTIVAR LAS NOTIFICACIONES DE WHATSAPP:
//   1. En el teléfono de Mariale, guarda este contacto:
//      Nombre: CallMeBot
//      Número: +34 644 71 83 54
//   2. Envíale este mensaje exacto por WhatsApp:
//      "I allow callmebot to send me messages"
//   3. CallMeBot responderá con un API Key (ej: 1234567)
//   4. En el editor de Apps Script ve a:
//      Proyecto → Configuración (engranaje ⚙️) → Propiedades del script
//      Agrega:  Propiedad: CALLMEBOT_API_KEY  |  Valor: (el número que te enviaron)
//   5. Reimplementa el script (Implementar → Administrar → Nueva versión)
// ============================================================

const SHEET_ID   = '1h7oRAUMmHvybit9AhN1rePjyqxIwSUDxo7oamzLXDbw';
const SHEET_NAME = 'Base de datos de Clientes de Bedtime Journey';
const MARIALE_PHONE = '50686489507'; // +506 8648 9507

// ── Guardar en Google Sheets ─────────────────────────────────
function doPost(e) {
  try {
    const ss    = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();

    // Crear encabezados si la hoja está vacía
    if (sheet.getLastRow() === 0) {
      const headers = ['Fecha', 'Nombre', 'Email', 'WhatsApp', 'Edad del bebé', 'Mensaje'];
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length)
           .setFontWeight('bold')
           .setBackground('#7259A3')
           .setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.date     || new Date().toLocaleString('es-CR'),
      data.name     || '',
      data.email    || '',
      data.whatsapp || '',
      data.baby     || '',
      data.message  || '',
    ]);

    // Notificar a Mariale por WhatsApp
    sendWhatsAppNotification(data);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── Notificación de WhatsApp via CallMeBot ───────────────────
function sendWhatsAppNotification(data) {
  try {
    const apiKey = PropertiesService.getScriptProperties().getProperty('CALLMEBOT_API_KEY');
    if (!apiKey) {
      console.log('CallMeBot: API Key no configurada — salta la notificación');
      return;
    }

    const babyLabels = {
      '0-5m':  'Recién nacido (0–5 meses)',
      '5-12m': '5–12 meses',
      '1-2a':  '1–2 años',
      '2-3a':  '2–3 años',
      '3-5a':  '3–5 años',
    };
    const babyLabel = babyLabels[data.baby] || data.baby || 'No indicado';

    const msg =
      `🌙 *Nueva consulta en Bedtime Journey!*\n\n` +
      `👤 *Nombre:* ${data.name}\n` +
      `📧 *Email:* ${data.email}\n` +
      `📱 *WhatsApp:* ${data.whatsapp || 'No indicado'}\n` +
      `👶 *Edad del bebé:* ${babyLabel}\n\n` +
      `💬 *Mensaje:*\n${data.message}\n\n` +
      `_${data.date}_`;

    const url = `https://api.callmebot.com/whatsapp.php?phone=${MARIALE_PHONE}&text=${encodeURIComponent(msg)}&apikey=${apiKey}`;
    const response = UrlFetchApp.fetch(url);
    console.log('WhatsApp enviado — Status:', response.getResponseCode());

  } catch (err) {
    console.error('Error enviando WhatsApp:', err.toString());
    // No lanzamos el error para no bloquear el guardado en Sheets
  }
}

// ── Función de prueba ────────────────────────────────────────
function testDoPost() {
  const mockEvent = {
    postData: {
      contents: JSON.stringify({
        date: new Date().toLocaleString('es-CR'),
        name: 'Valentina García',
        email: 'valen@test.com',
        whatsapp: '+506 8000 0000',
        baby: '5-12m',
        message: 'Hola, mi bebé de 8 meses no duerme bien. ¿Podemos hablar?',
      }),
    },
  };
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
