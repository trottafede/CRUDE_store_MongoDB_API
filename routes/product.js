const express = require("express");
const product = express.Router();

const { index, show, create, update, destroy } = require("../controllers/product");

// Getting  all
product.get("/", index);
// Getting  one
product.get("/:id", show);
// Creating one
product.post("/",create);
// Updating one
product.patch("/:id", update);
// Deleting one
product.delete("/:id", destroy);

module.exports = product;
