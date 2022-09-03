const { Pool } = require("pg");
const config = require("../config/config");

const { dbHost, dbPort, dbUser, dbPassword, dbName, dbDriver } = config();

const connectionString = `${dbDriver}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;

const db = new Pool({
  connectionString,
});

module.exports = db;
