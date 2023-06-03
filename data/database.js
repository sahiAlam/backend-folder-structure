import mongoose from "mongoose";

// DB
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "backend-api",
    })
    .then(() => {
      console.log("Database connected..");
    })
    .catch((err) => {
      console.log(err);
    });
};
