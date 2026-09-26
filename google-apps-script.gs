// ============================================================
// BEDTIME JOURNEY — Google Apps Script
// Recibe datos del formulario web, guarda en Sheets
// y envía notificaciones por Email y WhatsApp (CallMeBot)
// ============================================================

const SHEET_ID   = '1h7oRAUMmHvybit9AhN1rePjyqxIwSUDxo7oamzLXDbw';
const SHEET_NAME = 'Base de datos de Clientes de Bedtime Journey';
const MARIALE_PHONE = '50686489507'; // +506 8648 9507
const MARIALE_EMAIL = 'mariale.bedtime@gmail.com';

// ── Guardar en Google Sheets ─────────────────────────────────
function doPost(e) {
  try {
    const ss    = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();

    // Crear encabezados si la hoja está vacía
    if (sheet.getLastRow() === 0) {
      const headers = ['Fecha', 'Nombre', 'Email', 'WhatsApp', 'Servicio Interesado', 'Edad del bebé', 'Mensaje'];
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
      data.service  || 'Consulta general',
      data.baby     || '',
      data.message  || '',
    ]);

    // 1. Notificar por Email (Instantáneo, 100% Gratis y Confiable sin depender de bots)
    sendEmailNotification(data);

    // 2. Notificar por WhatsApp via CallMeBot (si la API Key está configurada)
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

// ── Notificación por Correo Gmail (Push Inmediata al Celular) ──
function sendEmailNotification(data) {
  try {
    const subject = `🌙 ¡Nueva consulta de ${data.name} en Bedtime Journey!`;
    const cleanWa = (data.whatsapp || '').replace(/[^0-9]/g, '');
    const waLink = cleanWa ? `https://wa.me/${cleanWa}?text=${encodeURIComponent('¡Hola ' + data.name + '! Recibí tu consulta en Bedtime Journey 🌙')}` : '#';

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #F7F4F0; border-radius: 16px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7259A3; margin-top: 0;">🌙 ¡Nueva consulta en Bedtime Journey!</h2>
        <hr style="border: 0; border-top: 1px solid #A794CA; margin-bottom: 20px;" />
        <p><strong>👤 Nombre:</strong> ${data.name}</p>
        <p><strong>📧 Email:</strong> ${data.email}</p>
        <p><strong>📱 WhatsApp:</strong> ${data.whatsapp || 'No indicado'}</p>
        <p><strong>🏷️ Servicio de interés:</strong> ${data.service || 'Consulta general'}</p>
        <p><strong>👶 Edad del bebé:</strong> ${data.baby || 'No indicada'}</p>
        <br/>
        <p><strong>💬 Mensaje de la familia:</strong></p>
        <blockquote style="background: #ffffff; padding: 16px; border-left: 4px solid #7259A3; border-radius: 8px; color: #333; line-height: 1.6;">
          ${data.message || 'Sin mensaje adicional'}
        </blockquote>
        <br/>
        ${cleanWa ? `
          <div style="text-align: center; margin-top: 20px;">
            <a href="${waLink}" target="_blank" style="background-color: #25D366; color: white; padding: 14px 28px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 15px; display: inline-block;">
              💬 Responder a ${data.name} por WhatsApp
            </a>
          </div>
        ` : ''}
        <br/>
        <p style="font-size: 12px; color: #888; text-align: center;">Registrado automáticamente en tu Google Sheet el ${data.date}</p>
      </div>
    `;

    MailApp.sendEmail({
      to: MARIALE_EMAIL,
      subject: subject,
      htmlBody: htmlBody
    });
    console.log('Email de notificación enviado con éxito a:', MARIALE_EMAIL);
  } catch (err) {
    console.error('Error enviando Email:', err.toString());
  }
}

// ── Notificación de WhatsApp via CallMeBot ───────────────────
function sendWhatsAppNotification(data) {
  try {
    const apiKey = PropertiesService.getScriptProperties().getProperty('CALLMEBOT_API_KEY');
    if (!apiKey) {
      console.log('CallMeBot: API Key no configurada — salta la notificación de WhatsApp');
      return;
    }

    const msg =
      `🌙 *Nueva consulta en Bedtime Journey!*\n\n` +
      `👤 *Nombre:* ${data.name}\n` +
      `📧 *Email:* ${data.email}\n` +
      `📱 *WhatsApp:* ${data.whatsapp || 'No indicado'}\n` +
      `🏷️ *Servicio:* ${data.service || 'Consulta general'}\n` +
      `👶 *Edad del bebé:* ${data.baby || 'No indicada'}\n\n` +
      `💬 *Mensaje:*\n${data.message}\n\n` +
      `_${data.date}_`;

    const url = `https://api.callmebot.com/whatsapp.php?phone=${MARIALE_PHONE}&text=${encodeURIComponent(msg)}&apikey=${apiKey}`;
    const response = UrlFetchApp.fetch(url);
    console.log('WhatsApp enviado — Status:', response.getResponseCode());

  } catch (err) {
    console.error('Error enviando WhatsApp:', err.toString());
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
        service: 'Asesoría Bedtime Journey ($280)',
        baby: '5-12m',
        message: 'Hola, mi bebé de 8 meses no duerme bien. ¿Podemos hablar?',
      }),
    },
  };
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
