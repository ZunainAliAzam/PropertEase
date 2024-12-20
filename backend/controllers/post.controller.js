import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    return res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to get posts!" });
  }
};


export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const onePost = await prisma.post.findUnique({
      where: { id },
    });
    return res.status(200).json(onePost);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to get post!" });
  }
};


export const addPost = async (req, res) => {
  const tokenUserId = req.userId;
  const body = req.body;

  if (!tokenUserId) {
    return res.status(403).json({ message: "Unauthorized user!" });
  }
  try {
    const newPost = await prisma.post.create({
      data: {
        ...body,
        userId: tokenUserId,
      },
    });
    return res.status(201).json(newPost);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to add post!" });
  }
};


export const updatePost = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to update post!" });
  }
};


export const deletePost = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to delete post!" });
  }
};
