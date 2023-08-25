const User = require("../models/User");

// Getting  all
const index = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error searching users", error });
  }
};

// Getting  one
const show = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).exec();
    if (!user) {
      res.status(404).json(id + " User not found");
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error searching user", error });
  }
};

// Creating one
const create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error });
  }
};

// Updating one
const update = async (req, res) => {
  const { id } = req.params;
  const { name, username, email, password, avatar, dateOfBirth } = req.body;

  try {
    let user = await User.findById(id);
    if (name != null) {
      user.name = name;
    }
    if (username != null) {
      user.username = username;
    }
    if (email != null) {
      user.email = email;
    }
    if (password != null) {
      user.password = password;
    }
    if (avatar != null) {
      user.avatar = avatar;
    }
    if (dateOfBirth != null) {
      user.dateOfBirth = dateOfBirth;
    }

    user.updatedAt = Date.now();
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: "Error editing user", error });
  }
};

// Deleting one
const destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (user) {
      res.status(201).json("User deleted");
    } else {
      res.status(404).json("User does not exists");
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

module.exports = { index, show, create, update, destroy };
