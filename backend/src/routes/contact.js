const express = require('express');
const { contactValidation, handleValidationErrors } = require('../middleware/validation');
const { query } = require('../utils/database');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post('/', contactValidation, handleValidationErrors, async (req, res) => {
  try {
    const { name, email, phone, subject, message, consentDataProcessing } = req.body;
    
    const result = await query(
      `INSERT INTO contact_inquiries (name, email, phone, subject, message, consent_data_processing)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [name, email, phone, subject, message, consentDataProcessing]
    );

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Neue Kontaktanfrage: ${subject || 'Ohne Betreff'}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
        <p><strong>Betreff:</strong> ${subject || 'Ohne Betreff'}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
        <p><strong>Datenschutz-Einverständnis:</strong> ${consentDataProcessing ? 'Ja' : 'Nein'}</p>
      `
    });

    res.status(201).json({
      message: 'Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.',
      id: result.rows[0].id
    });
  } catch (error) {
    console.error('Fehler beim Senden der Kontaktanfrage:', error);
    res.status(500).json({
      error: 'Fehler beim Senden',
      message: 'Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.'
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await query(
      'SELECT id, name, email, subject, status, created_at FROM contact_inquiries ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Fehler beim Abrufen der Kontaktanfragen:', error);
    res.status(500).json({
      error: 'Datenbankfehler',
      message: 'Kontaktanfragen konnten nicht abgerufen werden.'
    });
  }
});

module.exports = router;
