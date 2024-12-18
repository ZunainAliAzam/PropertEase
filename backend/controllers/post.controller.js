const getPosts = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to get posts!" });
  }
};
const getPost = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to get post!" });
  }
};
const addPost = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to add post!" });
  }
};
const updatePost = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to update post!" });
  }
};
const deletePost = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to delete post!" });
  }
};

export default { getPosts, getPost, addPost, updatePost, deletePost };
