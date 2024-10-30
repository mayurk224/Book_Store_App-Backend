import express from "express";
import { PORT } from "./config.js";

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/welcome", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome");
});