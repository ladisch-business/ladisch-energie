const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('connect', () => {
  console.log('✅ Datenbankverbindung hergestellt');
});

pool.on('error', (err) => {
  console.error('❌ Datenbankfehler:', err);
});

const query = async (text, params) => {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('📊 Query ausgeführt:', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('❌ Query-Fehler:', { text, error: error.message });
    throw error;
  }
};

const getClient = async () => {
  return await pool.connect();
};

module.exports = {
  query,
  getClient,
  pool
};
