require("dotenv").config();
const express = require("express");
const configureDependencyInjection = require("./config/di.js");

const app = express();
const port = procces.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use("/public", express.static("public"));

const container = configureDependencyInjection(app);
app.use(container.get("Session"));

