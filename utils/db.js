const mongoose = require("mongoose");

// Set up MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Event handlers for successful connection and error
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

module.exports = db;
