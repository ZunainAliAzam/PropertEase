 import express from "express";
import CookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import dotenv from "dotenv";
import http from "http";

dotenv.config();

const app = express();
const port = process.env.PORT || 8800;  // Use a specific port

app.use(express.json());
app.use(CookieParser());

app.use("/api/auth", authRoute);
app.use("/post", postRoute);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${port} is already in use. Exiting...`);
    process.exit(1);  // Exit the process if the port is in use
  } else {
    console.error("Server error:", err);
  }
});
