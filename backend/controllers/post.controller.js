import prisma from "../lib/prisma.js"; // Importing the Prisma client instance

// Controller to fetch all posts
export const getPosts = async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await prisma.post.findMany();
    return res.status(200).json(posts); // Respond with the list of posts
  } catch (err) {
    console.log(err); // Log the error for debugging
    return res.status(500).json({ message: "Failed to get posts!" }); // Respond with an error message
  }
};

// Controller to fetch a single post by ID
export const getPost = async (req, res) => {
  const id = req.params.id; // Extracting the post ID from request parameters
  try {
    // Find the post with the given ID
    const onePost = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetails: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        }, // Include the user information in the response
      }
    });
    return res.status(200).json(onePost); // Respond with the post details
  } catch (err) {
    console.log(err); // Log the error for debugging
    return res.status(500).json({ message: "Failed to get post!" }); // Respond with an error message
  }
};

// Controller to add a new post
export const addPost = async (req, res) => {
  const tokenUserId = req.userId; // Extracting user ID from the token
  const body = req.body; // Extracting the post details from the request body

  if (!tokenUserId) {
    // Check if the user is authenticated
    return res.status(403).json({ message: "Unauthorized user!" }); // Respond with an unauthorized error
  }

  try {
    // Create a new post with the provided data and associate it with the user
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetails: {
          create: body.postDetails,
        },
      },
      include: {
        postDetails: true, // Include the postDetails in the response
      },
    });
    return res.status(201).json(newPost); // Respond with the created post
  } catch (err) {
    console.log(err); // Log the error for debugging
    return res.status(500).json({ message: "Failed to add post!" }); // Respond with an error message
  }
};

// Controller to update an existing post
export const updatePost = async (req, res) => {
  const id = req.params.id; // Extracting the post ID from request parameters
  const body = req.body; // Extracting the updated data from the request body
  const tokenUserId = req.userId; // Extracting user ID from the token

  try {
    // Find the post with the given ID
    const post = await prisma.post.findUnique({
      where: { id },
    });

    // Check if the post exists and if the user is authorized to update it
    if (!post || post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Unauthorized user!" }); // Respond with an unauthorized error
    }

    // Update the post with the new data
    const updateOnePost = await prisma.post.update({
      where: { id },
      data: {
        ...body,
      },
    });

    return res.status(200).json(updateOnePost); // Respond with the updated post
  } catch (err) {
    console.log(err); // Log the error for debugging
    return res.status(500).json({ message: "Failed to update post!" }); // Respond with an error message
  }
};

// Controller to delete a post
export const deletePost = async (req, res) => {
  const id = req.params.id; // Extracting the post ID from request parameters
  const tokenUserId = req.userId; // Extracting user ID from the token

  try {
    // Find the post with the given ID
    const post = await prisma.post.findUnique({
      where: { id },
    });

    // Check if the post exists and if the user is authorized to delete it
    if (!post || post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Unauthorized user!" }); // Respond with an unauthorized error
    }

    // Delete the post
    await prisma.post.delete({
      where: { id },
    });

    return res.status(200).json({ message: "Post deleted successfully" }); // Respond with a success message
  } catch (err) {
    console.log(err); // Log the error for debugging
    return res.status(500).json({ message: "Failed to delete post!" }); // Respond with an error message
  }
};
