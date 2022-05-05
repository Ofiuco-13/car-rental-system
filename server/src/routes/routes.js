const express = require("express");
const {
  getAllRentals,
  getRental,
  createRental,
  updateRental,
  deleteRental,
} = require("../../controllers/car-rental-controller.js");

const router = express.Router();

router.get("/", getAllRentals);
router.get("/:id", getRental);
router.post("/", createRental);
router.put("/:id", updateRental);
router.delete("/:id", deleteRental);

module.exports = router;
