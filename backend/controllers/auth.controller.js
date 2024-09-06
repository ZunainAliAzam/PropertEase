import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

// Register function
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create a new user and save in the database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });

    res.status(201).send({ message: "New user created successfully" });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).send({ message: "Failed to create new user" });
  }
};

// Login function
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    // Check if the password is correct
    const isCorrect = await bcrypt.compare(password, user.password);

    if (!isCorrect) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    // Generate a JWT token and send it in the response cookie
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    const age = 1000 * 60 * 60 * 24 * 7; // 7 days in milliseconds

    res.cookie("token", token, {
      httpOnly: true,
      // secure: true, // Enable this in production
      expires: new Date(Date.now() + age),
    });

    res.status(200).send({ message: "Login successful", token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).send({ message: "Something went wrong during login" });
  }
};

// Logout function (to be implemented)
export const logout = (req, res) => {
  // You can implement cookie clearing or any other DB-related logout operations here
  res.clearCookie("token").status(200).send({ message: "Logout successful" });
};
