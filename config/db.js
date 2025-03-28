const mysql = require("mysql2");

// Create a connection pool to the database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Bhhuma@2000",
  database: "mysql_database",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Promisify pool queries for async/await support
const db = pool.promise();

module.exports = db;
