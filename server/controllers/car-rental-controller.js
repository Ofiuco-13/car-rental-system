const rentalModel = require("../models/car-rental-model.js");

const getAllRentals = async (req, res) => {
  try {
    const registers = await rentalModel.findAll();
    res.json(registers);
  } catch (e) {
    res.json({ message: e.message });
  }
};

const getRental = async (req, res) => {
  try {
    const rental = rentalModel.findAll({
      where: { id: req.params.id },
    });
    res.json(rental);
  } catch (e) {
    res.json({ message: e.message });
  }
};

const createRental = async (req, res) => {
  try {
    await rentalModel.create(req.body);
    res.json({
      message: "Registro creado exitosamente",
    });
  } catch (e) {
    res.json({ message: e.message });
  }
};

const updateRental = async (req, res) => {
  try {
    await rentalModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Registro actualizado exitosamente",
    });
  } catch (e) {
    res.json({ message: e.message });
  }
};

const deleteRental = async (req, res) => {
  try {
    await rentalModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "Registro actualizado exitosamente",
    });
  } catch (e) {
    res.json({ message: e.message });
  }
};

module.exports = {
  getAllRentals,
  getRental,
  createRental,
  updateRental,
  deleteRental,
};
