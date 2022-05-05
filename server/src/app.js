require("dotenv").config();
const db = require("../database/db.js");
const express = require("express");
const cors = require("cors");

const rentalRoutes = require("./routes/routes.js");

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.use(cors());
app.use(express.json());
app.use("/rentals", rentalRoutes);

const conection = async () => {
  try {
    await db.authenticate();
    console.log("Conexion exitosa a la db");
  } catch (e) {
    console.log(`Error de conexion: ${e}`);
  }
};

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.listen(port, () => {
  conection();
  console.log(`Escuchando en el puerto: ${port}`);
});
