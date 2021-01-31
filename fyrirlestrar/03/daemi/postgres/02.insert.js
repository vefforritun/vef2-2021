import pg from 'pg';

const connectionString = 'postgres://vef2-2021:123@localhost/vef2-2021';

const pool = new pg.Pool({ connectionString });

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

async function main() {
  const client = await pool.connect();

  const query = 'INSERT INTO people(name, text) VALUES($1, $2) RETURNING *';
  const values = ['Mr. Foo', 'Foo!'];

  try {
    const result = await client.query(query, values);
    console.log('rows :>> ', result.rows);
  } catch (e) {
    console.error('Error selecting', e);
  } finally {
    client.release();
  }

  await pool.end();
}

main().catch((e) => { console.error(e); });
