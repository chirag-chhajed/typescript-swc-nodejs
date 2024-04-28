import express, { type Response } from "express";
import { nanoid } from "nanoid";
import "dotenv/config";
import { hello } from "./hello.js";

const app = express();

app.get("/", (req, res) => {
  res.send(nanoid(32));
});

app.listen(3000, () => {
  console.log(hello);
  console.log("Server is running on port 3000");
});
