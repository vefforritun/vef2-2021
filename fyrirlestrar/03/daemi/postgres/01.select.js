import pg from 'pg';

/*
// Aðrar leiðir til að tengjast:
// Reynir að lesa úr env breytum:
// `PGUSER`, `PGHOST`, `PGPASSWORD`, `PGDATABASE` og `PGPORT`
const pool = new pg.Pool();

// Skilgreinum hverja og eina breytu
const pool = new pg.Pool(
  { user: '', host: '', password: '', database: '', port: 1234 }
);
*/

// Notum tengistreng sem geymir allar breytur í streng, handhægt þegar
// við förum að setja upp á Heroku
const connectionString = 'postgres://vef2-2021:123@localhost/vef2-2021';
const pool = new pg.Pool({ connectionString });

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

async function main() {
  const client = await pool.connect();

  try {
    const result = await client.query('SELECT * FROM people');
    console.log('rows :>> ', result.rows);
  } catch (e) {
    console.error('Error selecting', e);
  } finally {
    client.release();
  }

  await pool.end();
}

main().catch((e) => { console.error(e); });
