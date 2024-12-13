import prisma from "../lib/prisma.js";

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "failed to get all users!" });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "failed to get user!" });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const body = req.body;

  if (id !== tokenUserId) {
    res.status(403).json({ message: "user unauthorized" });
  }
  try {
    const updateUser = await prisma.user.update({
      where: { id },
      data: body,
    });
    return res.status(200).json(updateUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to update user!" });
  }
};

export const deleteUser = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to delete user!" });
  }
};
