const Product = require("../models/Product");

// Getting  all
const index = async (req, res) => {
  let users = [];
  try {
    users = await Product.find();
  } catch (error) {
    console.log(error);
  }
  res.send(users);
};

// Getting  one
const show = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id).exec();
    if (!product) {
      res.status(404).json(id + " Product not found");
    }
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error searching Product", error });
  }
};

// Creating one
const create = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "Error creating Product", error });
  }
};

// Updating one
const update = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, imageUrl, category } = req.body;

  try {
    let product = await Product.findById(id);
    if (name != null) {
      product.name = name;
    }
    if (description != null) {
      product.description = description;
    }
    if (price != null) {
      product.price = price;
    }
    if (stock != null) {
      product.stock = stock;
    }
    if (imageUrl != null) {
      product.imageUrl = imageUrl;
    }
    if (category != null) {
      product.category = category;
    }

    product.updatedAt = Date.now();
    const result = await product.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: "Error editing Product", error });
  }
};

// Deleting one
const destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);
    if (product) {
      res.status(201).json("Product deleted");
    } else {
      res.status(404).json("Product does not exists");
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting Product", error });
  }
};

module.exports = { index, show, create, update, destroy };
