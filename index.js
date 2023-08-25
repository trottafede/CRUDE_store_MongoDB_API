require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const db = require("./utils/db");

//routes
const routes = require('./routes');


//Seeders
// const seedUsers = require("./utils/userSeeder");
// seedUsers(100);
// const productSeeder = require("./utils/productSeeder");
// productSeeder(100);

// Use JSON body parsing middleware
app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log("Escuchando en puerto: " + port);
});
