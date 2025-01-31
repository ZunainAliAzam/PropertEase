import bcrypt from "bcrypt"; // Import bcrypt for password hashing
import jwt from "jsonwebtoken"; // Import JSON Web Token (JWT) for token generation
import prisma from "../lib/prisma.js"; // Import Prisma client

// Register function
export const register = async (req, res) => {
  const { username, email, password } = req.body; // Extract user input from the request body

  try {
    // Hash the user's password before saving it to the database
    const hashPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        username, // Save the username
        email, // Save the email
        password: hashPassword, // Save the hashed password
      },
    });

    // Respond with a success message
    res.status(201).send({ message: "New user created successfully" });
  } catch (err) {
    console.error("Error creating user:", err); // Log any errors during user creation
    res.status(500).send({ message: "Failed to create new user" }); // Send an error response
  }
};

// Login function
export const login = async (req, res) => {
  const { username, password } = req.body; // Extract user input from the request body

  try {
    // Check if the user exists in the database
    const user = await prisma.user.findUnique({
      where: { username },
    });

    // If the user does not exist, return an unauthorized response
    if (!user) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    // Compare the provided password with the stored hashed password
    const isCorrect = await bcrypt.compare(password, user.password);

    // If the password is incorrect, return an unauthorized response
    if (!isCorrect) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    const age = 1000 * 60 * 60 * 24 * 7; // Token expiration time: 7 days in milliseconds

    // Generate a JWT token
    const token = jwt.sign(
      {
        userId: user.id, // Include user ID in the payload
        isAdmin: true, // Include an example `isAdmin` field in the payload
      },
      process.env.JWT_SECRET_KEY, // Use the secret key from environment variables
      {
        expiresIn: age, // Set token expiration time
      }
    );

    // Exclude the password from the response
    const { password: userPassword, ...userInfo } = user;

    // Send the token in an HTTP-only cookie and respond with user info
    res
      .cookie("token", token, {
        httpOnly: true, // Ensure the cookie is only accessible via HTTP (not JavaScript)
        // secure: true, // Uncomment in production to send cookies over HTTPS
        expires: new Date(Date.now() + age), // Set the cookie expiration date
      })
      .status(200)
      .json(userInfo); // Send user information as the response
  } catch (err) {
    console.error("Login error:", err); // Log any errors during login
    res.status(500).send({ message: "Something went wrong during login" }); // Send an error response
  }
};

// Logout function
export const logout = (req, res) => {
  // Clear the authentication token cookie
  res.clearCookie("token")
    .status(200)
    .send({ message: "Logout successful" }); // Send a logout success response
};
