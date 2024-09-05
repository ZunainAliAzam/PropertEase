import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  //hash the password
  try {
    const hashPassword = await bcrypt.hash(password, 10);

    //create a new account and save it in the database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });
    res.status(201).send({ message: "New user created successfully" });
  } catch (err) {
    res.status(500).send({ message: "Failed to create new user" });
  }
};
export const login = (req, res) => {
  //DB operations
};
export const logout = (req, res) => {
  //DB operations
};
