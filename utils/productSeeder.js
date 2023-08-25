const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const Product = require("../models/Product");

// Function to generate random products
const generateRandomProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = {
      name: faker.commerce.product(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      stock: faker.number.int({ max: 100 }),
      imageUrl: faker.image.url(),
      category: faker.commerce.department(),
    };
    products.push(product);
  }
  return products;
};

// Function to seed the products
const seedProducts = async (count) => {
  try {
    await Product.deleteMany(); // Clear existing products
    const productsToSeed = generateRandomProducts(count);
    await Product.insertMany(productsToSeed); // Insert new products
    console.log("Products seeded successfully");
  } catch (error) {
    console.error("Error seeding products:", error);
  } 
};

module.exports = seedProducts;
