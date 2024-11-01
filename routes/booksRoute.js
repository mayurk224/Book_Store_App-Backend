import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { title, author, publishYear, description } = req.body;

  // Validate request data
  if (!title || !author || !publishYear || !description) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newBook = await Book.create({
      title,
      author,
      publishYear,
      description,
    });
    return res.status(201).json(newBook);
  } catch (err) {
    console.error("Error saving book:", err);
    return res.status(500).json({ error: "Failed to save book" });
  }
});

router.get("/", async (req, res) => {
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

router.get("/:id", async (req, res) => {
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

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, publishYear, description } = req.body;
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, publishYear, description },
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

router.delete("/:id", async (req, res) => {
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

export default router;
