import { User } from "../models/user.js";

const getHomeRoute = (req, res) => {
  res.send("Nice Working");
};

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({
    status: true,
    users,
  });
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  await User.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    status: true,
    message: "User created successfully",
  });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    message: "Updated user",
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  await user.remove();

  res.json({
    success: true,
    message: "Deleted user",
  });
};

export {
  getHomeRoute,
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
