const express = require('express');
const { customerValidation, handleValidationErrors } = require('../middleware/validation');
const { query } = require('../utils/database');
const router = express.Router();

router.post('/', customerValidation, handleValidationErrors, async (req, res) => {
  try {
    const {
      firstName, lastName, email, phone, address, postalCode, city,
      consentMarketing, consentDataProcessing
    } = req.body;

    const result = await query(
      `INSERT INTO customers (first_name, last_name, email, phone, address, postal_code, city, consent_marketing, consent_data_processing)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`,
      [firstName, lastName, email, phone, address, postalCode, city, consentMarketing, consentDataProcessing]
    );

    res.status(201).json({
      message: 'Kunde erfolgreich erstellt',
      customerId: result.rows[0].id
    });
  } catch (error) {
    if (error.code === '23505') {
      return res.status(409).json({
        error: 'E-Mail bereits registriert',
        message: 'Ein Kunde mit dieser E-Mail-Adresse existiert bereits.'
      });
    }
    
    console.error('Fehler beim Erstellen des Kunden:', error);
    res.status(500).json({
      error: 'Erstellungsfehler',
      message: 'Kunde konnte nicht erstellt werden.'
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await query(
      'SELECT id, first_name, last_name, email, phone, city, created_at FROM customers ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Fehler beim Abrufen der Kunden:', error);
    res.status(500).json({
      error: 'Datenbankfehler',
      message: 'Kunden konnten nicht abgerufen werden.'
    });
  }
});

module.exports = router;
