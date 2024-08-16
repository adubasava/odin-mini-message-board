require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://${{PGUSER}}:${{POSTGRES_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:5432/${{PGDATABASE}}",
});
