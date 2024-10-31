import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Book } from "./models/bookModel.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const mongoDBURL = process.env.MONGODB_URL;

// Middleware
app.use(express.json());

// Welcome route
app.get("/welcome", (req, res) => {
  return res.status(200).send("Welcome");
});

// Route to save a book
app.post("/books", async (req, res) => {
  const { title, author, publishYear } = req.body;

  // Validate request data
  if (!title || !author || !publishYear) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newBook = await Book.create({ title, author, publishYear });
    return res.status(201).json(newBook);
  } catch (err) {
    console.error("Error saving book:", err);
    return res.status(500).json({ error: "Failed to save book" });
  }
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
    console.error("MongoDB connection error:", err);
  });
