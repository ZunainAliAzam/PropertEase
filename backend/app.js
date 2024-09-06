import express from "express";
import CookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
const app = express();

const port = 3000;

app.use(express.json());
app.use(CookieParser());

app.use("/api/auth", authRoute);
app.use("/post", postRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
