require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   text VARCHAR (500),
   username VARCHAR (20),
   added TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO messages (text, username) 
VALUES
  ('Hi there!', 'Bryan'),
  ('Good morning!', 'Odin'),
  ('Does anyone has time to go to the cinema?', 'Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      process.env.DATABASE_URL ||
      "postgresql://${{PGUSER}}:${{POSTGRES_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:5432/${{PGDATABASE}}",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
