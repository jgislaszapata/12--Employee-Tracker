const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize (
  process.env.MYSQLDB,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    // Database location
    host: process.env.MYSQLHOST,
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;