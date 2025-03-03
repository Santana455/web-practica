import pg from 'pg';
const { Client } = pg;

const config = {
  user: "minimarket_app_user",
  host: "dpg-cuvsi4aj1k6c7389jot0-a.oregon-postgres.render.com",
  database: "minimarket_app",
  password: "MDH3ZD9wRseQXKfzsvR7F9vQ9niOq9bt",
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
}

export async function Conectar(params) {
  const cliente = new Client(config);
  try {
    await cliente.connect();
    console.log("✅ Conectado a la base de datos");
  } catch (error) {
    console.log("❌ Error al conectar: ", error);
  } finally {
    await cliente.end();
  }
}

export async function TraerWeb() {
  const client = new Client(config);
  try {
    await client.connect();
    const res = await client.query('SELECT * FROM web');
    return res.rows;
  } catch (error) {
    console.log(error);
  } finally {
    await client.end();
  }
}

export async function TraerEmpleados() {
  const client = new Client(config);
  try {
    await client.connect();
    const res = await client.query('SELECT * FROM empleados');
    return res.rows;
  } catch (error) {
    console.log(error);
  } finally {
    await client.end();
  }
}
