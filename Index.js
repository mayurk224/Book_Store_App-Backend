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

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      books,
    });
  } catch (err) {
    console.error("Error fetching books:", err);
    return res.status(500).json({ error: "Failed to fetch books" });
  }
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    return res.status(200).json(book);
  } catch (err) {
    console.error("Error fetching book:", err);
    return res.status(500).json({ error: "Failed to fetch book" });
  }
});

app.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, publishYear } = req.body;
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, publishYear },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    return res
      .status(200)
      .send({ message: "Book updated", id: updatedBook.id });
  } catch (err) {
    console.error("Error updating book:", err);
    return res.status(500).json({ error: "Failed to update book" });
  }
});

app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    return res
      .status(200)
      .send({ message: "Book deleted", id: deletedBook.id });
  } catch (err) {
    console.error("Error deleting book:", err);
    return res.status(500).json({ error: "Failed to delete book" });
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
