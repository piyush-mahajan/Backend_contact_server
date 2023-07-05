const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
//@desc Reister the user
// routes GET /api/users/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("all firld are mandetory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("USer alredy register");
  }

  //hash password
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);

  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      username: user.username,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }

  console.log(user);
  res.json({ message: "Register the user" });
});
//@desc Login the user
// routes Post /api/users/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the user" });
});
//@desc Login the user
// routes Post /api/users/current
//@access private

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
