import jwt from "jsonwebtoken";

// Middleware to verify JWT token
export const shouldBeLoggedIn = async (req, res) => {
  console.log(req.userId);
  res.status(200).json({ message: "You're authorized" });
};

// Middleware to check if user is admin
export const shouldBeAdmin = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "You are not logged in." });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token." });
    }
    if (!payload.isAdmin) {
      return res.status(403).json({ message: "You are not an admin" });
    }
  });

  res.status(200).json({ message: "You're authorized" });
};
