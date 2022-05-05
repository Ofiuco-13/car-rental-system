const db = require("../database/db");
const { DataTypes } = require("sequelize");

const rentalModel = db.define("rentals", {
  id: { type: DataTypes.INTEGER },
  pricePerDay: { type: DataTypes.INTEGER },
  totalPrice: { type: DataTypes.INTEGER },
  state: { type: DataTypes.STRING },
  PaymentMethod: { type: DataTypes.STRING },
  car: { type: DataTypes.STRING },
  user: { type: DataTypes.STRING },
});

module.exports = rentalModel;
