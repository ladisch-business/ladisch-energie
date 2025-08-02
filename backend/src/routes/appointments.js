const express = require('express');
const { appointmentValidation, customerValidation, handleValidationErrors } = require('../middleware/validation');
const { query } = require('../utils/database');
const router = express.Router();

router.post('/', [...customerValidation, ...appointmentValidation], handleValidationErrors, async (req, res) => {
  try {
    const {
      firstName, lastName, email, phone, address, postalCode, city,
      consentMarketing, consentDataProcessing,
      appointmentType, preferredDate, preferredTime, durationMinutes, notes
    } = req.body;

    let customerId;
    const existingCustomer = await query('SELECT id FROM customers WHERE email = $1', [email]);
    
    if (existingCustomer.rows.length > 0) {
      customerId = existingCustomer.rows[0].id;
      await query(
        `UPDATE customers SET 
         first_name = $1, last_name = $2, phone = $3, address = $4, 
         postal_code = $5, city = $6, consent_marketing = $7, updated_at = CURRENT_TIMESTAMP
         WHERE id = $8`,
        [firstName, lastName, phone, address, postalCode, city, consentMarketing, customerId]
      );
    } else {
      const customerResult = await query(
        `INSERT INTO customers (first_name, last_name, email, phone, address, postal_code, city, consent_marketing, consent_data_processing)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`,
        [firstName, lastName, email, phone, address, postalCode, city, consentMarketing, consentDataProcessing]
      );
      customerId = customerResult.rows[0].id;
    }

    const appointmentResult = await query(
      `INSERT INTO appointments (customer_id, appointment_type, preferred_date, preferred_time, duration_minutes, notes)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [customerId, appointmentType, preferredDate, preferredTime, durationMinutes || 60, notes]
    );

    res.status(201).json({
      message: 'Ihr Termin wurde erfolgreich gebucht. Wir melden uns in Kürze bei Ihnen zur Bestätigung.',
      appointmentId: appointmentResult.rows[0].id,
      customerId
    });
  } catch (error) {
    console.error('Fehler beim Buchen des Termins:', error);
    res.status(500).json({
      error: 'Buchungsfehler',
      message: 'Ihr Termin konnte nicht gebucht werden. Bitte versuchen Sie es später erneut.'
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await query(`
      SELECT a.*, c.first_name, c.last_name, c.email, c.phone
      FROM appointments a
      JOIN customers c ON a.customer_id = c.id
      ORDER BY a.preferred_date DESC, a.preferred_time DESC
    `);
    res.json(result.rows);
  } catch (error) {
    console.error('Fehler beim Abrufen der Termine:', error);
    res.status(500).json({
      error: 'Datenbankfehler',
      message: 'Termine konnten nicht abgerufen werden.'
    });
  }
});

module.exports = router;
