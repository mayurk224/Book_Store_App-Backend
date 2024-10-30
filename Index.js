import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // Use ES6 syntax for dotenv

dotenv.config(); // Load environment variables from .env

const app = express();

// Access environment variables from process.env
const PORT = process.env.PORT || 3000;
const mongoDBURL = process.env.MONGODB_URL;

app.get("/welcome", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome");
});

// Connect to MongoDB and start the server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
