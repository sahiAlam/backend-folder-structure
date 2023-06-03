import bodyParser from "body-parser";
import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

export const app = express();

config({
  path: "./config.env",
});

// using middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", userRouter);
