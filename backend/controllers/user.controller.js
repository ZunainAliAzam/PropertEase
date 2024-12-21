import prisma from "../lib/prisma.js"; // Importing the Prisma client instance
import bcrypt from "bcrypt"; // Importing bcrypt for password hashing

// Controller to fetch all users
export const getUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await prisma.user.findMany();
    return res.status(200).json(users); // Respond with the list of users
  } catch (err) {
    console.log(err); // Log the error for debugging
    return res.status(500).json({ message: "Failed to get all users!" }); // Respond with an error message
  }
};

// Controller to fetch a single user by ID
export const getUser = async (req, res) => {
  try {
    // Find the user with the given ID
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
    });

    // If the user does not exist, return a 404 error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user); // Respond with the user details
  } catch (err) {
    console.log(err); // Log the error for debugging
    return res.status(500).json({ message: "Failed to get user!" }); // Respond with an error message
  }
};

// Controller to update a user's information
export const updateUser = async (req, res) => {
  const id = req.params.id; // Extracting the user ID from request parameters
  const tokenUserId = req.userId; // Extracting the authenticated user ID
  const { password, avatar, ...inputs } = req.body; // Extracting fields to update

  // Check if the user is authorized to update this user
  if (id !== tokenUserId) {
    return res.status(403).json({ message: "User unauthorized" });
  }

  let updatedPassword = null;
  try {
    // Hash the password if it is provided
    if (password) {
      updatedPassword = await bcrypt.hash(password, 10);
    }

    // Update the user record in the database
    const updateUser = await prisma.user.update({
      where: { id },
      data: {
        ...inputs, // Update fields from the request body
        ...(updatedPassword && { password: updatedPassword }), // Only update password if provided
        ...(avatar && { avatar }), // Only update avatar if provided
      },
    });

    // Exclude the password field from the response
    const { password: userPassword, ...rest } = updateUser;
    return res.status(200).json(rest); // Respond with the updated user data
  } catch (err) {
    console.log(err); // Log the error for debugging
    res.status(500).json({ message: "Failed to update user!" }); // Respond with an error message
  }
};

// Controller to delete a user
export const deleteUser = async (req, res) => {
  const id = req.params.id; // Extracting the user ID from request parameters
  const tokenUserId = req.userId; // Extracting the authenticated user ID

  // Check if the user is authorized to delete this user
  if (id !== tokenUserId) {
    return res.status(403).json({ message: "User unauthorized" });
  }

  try {
    // Delete the user from the database
    await prisma.user.delete({
      where: { id },
    });
    return res.status(200).json({ message: "User deleted successfully" }); // Respond with a success message
  } catch (err) {
    console.log(err); // Log the error for debugging
    res.status(500).json({ message: "Failed to delete user!" }); // Respond with an error message
  }
};
