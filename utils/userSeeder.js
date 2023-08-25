const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const User = require("../models/User");

// Function to seed users
const seedUsers = async (numUsers) => {
  try {
    for (let i = 0; i < numUsers; i++) {
      const newUser = new User({
        name: faker.person.firstName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        dateOfBirth: faker.date.past(),
      });

      await newUser.save();
      console.log(`User ${i + 1} created`);
    }
    console.log("Seeder completed successfully.");
  } catch (error) {
    console.error("Error seeding users:", error);
  } 
};

module.exports = seedUsers;
