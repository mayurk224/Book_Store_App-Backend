import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const mongoDBURL = process.env.MONGODB_URL;

// Middleware
app.use(express.json());
// Middleware to handle CORS policy
// option 1: allow all origins with default of cors(*)
app.use(cors());
// option 2: allow custom origins
// app.use(
//   cors({
//     origin: "http://localhost:5173", // replace with your frontend URL
//     methods: ["GET", "PUT", "DELETE", "POST"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// Welcome route
app.get("/welcome", (req, res) => {
  return res.status(200).send("Welcome");
});

app.use("/books", booksRoute);

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
