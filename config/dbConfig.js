require("dotenv").config({ path: __dirname + "/.env" });
const mysql = require("mysql2");
const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;
const PORT = process.env.PORT;

const dbconnection = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  port: PORT,
});

module.exports = dbconnection;
