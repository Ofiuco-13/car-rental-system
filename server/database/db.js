const { Sequelize } = require("sequelize");

const db = new Sequelize("car-rental-db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
