const db = require("../database/db.js");
const { DataTypes } = require("sequelize");

const rentalModel = db.define("rentals", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  pricePerDay: { type: DataTypes.INTEGER },
  totalPrice: { type: DataTypes.INTEGER },
  state: { type: DataTypes.STRING },
  paymentMethod: { type: DataTypes.STRING },
  car: { type: DataTypes.STRING },
  user: { type: DataTypes.STRING },
});

module.exports = rentalModel;
