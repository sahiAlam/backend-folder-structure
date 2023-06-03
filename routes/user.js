import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getHomeRoute,
  getUserById,
  updateUser,
} from "../controllers/user.js";
const router = express.Router();

router.get("/", getHomeRoute);

router.get("/all", getAllUsers);

router.post("/new", createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default router;
