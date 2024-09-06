import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    //check if the user exists
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      return res.status(401).send({ message: "Invalid credentials" });
    }
    //check if the password is correct
    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) {
      return res.status(401).send({ message: "Invalid credentials" });
    }
    //generate a JWT token and send it back

    const token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    // res.setHeader("Set-Cookie", "test="+"myValue").json("success")
    const age = 1000 * 60 * 60 * 24 * 7;
    res
      .cookie("test2", "myValue2", {
        httpOnly: true,
        //secure: true,
        expires: new Date(Date.now() + age),
      })
      .status(200)
      .send({ message: "Login Successfully" });
  } catch (err) {
    res.status(401).send({ message: "Invalid credentials" });
  }
};
export const logout = (req, res) => {
  //DB operations
};
