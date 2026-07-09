const { Sequelize } = require("sequelize");
const mysql2 = require('mysql2'); 
require('dotenv').config()
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port : process.env.DB_PORT, 
    dialectModule: mysql2,
    dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // fine for dev; use proper CA cert in production
    }
  }
});

module.exports = sequelize