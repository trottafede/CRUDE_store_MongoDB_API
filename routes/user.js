const express = require("express");
const user = express.Router();

const { checkUsernameExists } = require("../middlewares/checkUsernameExists");
const { index, show, create, update, destroy } = require("../controllers/user");

// Getting  all
user.get("/", index);
// Getting  one
user.get("/:id", show);
// Creating one
user.post("/", checkUsernameExists, create);
// Updating one
user.patch("/:id", update);
// Deleting one
user.delete("/:id", destroy);

module.exports = user;
