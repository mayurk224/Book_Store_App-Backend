import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const collectionName = process.env.MONGODB_COLLECTION_NAME;

export const Book = mongoose.model("book", bookSchema, collectionName);
