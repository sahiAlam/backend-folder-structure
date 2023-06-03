import { User } from "../models/user.js";

export const getHomeRoute = (req, res) => {
  res.send("Nice Working");
};

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({
    status: true,
    users,
  });
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body();
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

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    message: "Updated user",
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  await user.remove();

  res.json({
    success: true,
    message: "Deleted user",
  });
};
