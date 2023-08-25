// middlewares.js
const User = require("../models/User");

// Middleware to check if username is already taken
const checkUsernameExists = async (req, res, next) => {
  const { username } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: "Error checking username", error });
  }
};

module.exports = {
  checkUsernameExists,
};
