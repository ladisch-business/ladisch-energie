const express = require('express');
const { query } = require('../utils/database');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await query(
      'SELECT id, title, slug, description, image_url, sort_order FROM services WHERE is_active = true ORDER BY sort_order ASC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Fehler beim Abrufen der Services:', error);
    res.status(500).json({
      error: 'Datenbankfehler',
      message: 'Services konnten nicht abgerufen werden.'
    });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await query(
      'SELECT * FROM services WHERE slug = $1 AND is_active = true',
      [slug]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({
        error: 'Service nicht gefunden',
        message: 'Der angeforderte Service existiert nicht.'
      });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Fehler beim Abrufen des Services:', error);
    res.status(500).json({
      error: 'Datenbankfehler',
      message: 'Service konnte nicht abgerufen werden.'
    });
  }
});

module.exports = router;
