const express = require('express');
const { query } = require('../utils/database');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let queryText = 'SELECT id, question, answer, category, sort_order FROM faqs WHERE is_active = true';
    let params = [];
    
    if (category) {
      queryText += ' AND category = $1';
      params.push(category);
    }
    
    queryText += ' ORDER BY sort_order ASC, created_at ASC';
    
    const result = await query(queryText, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Fehler beim Abrufen der FAQs:', error);
    res.status(500).json({
      error: 'Datenbankfehler',
      message: 'FAQs konnten nicht abgerufen werden.'
    });
  }
});

router.get('/categories', async (req, res) => {
  try {
    const result = await query(
      'SELECT DISTINCT category FROM faqs WHERE is_active = true AND category IS NOT NULL ORDER BY category'
    );
    res.json(result.rows.map(row => row.category));
  } catch (error) {
    console.error('Fehler beim Abrufen der FAQ-Kategorien:', error);
    res.status(500).json({
      error: 'Datenbankfehler',
      message: 'FAQ-Kategorien konnten nicht abgerufen werden.'
    });
  }
});

module.exports = router;
