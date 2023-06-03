import mongoose from "mongoose";

// Schema
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Model
export const User = mongoose.model("User", userSchema);
