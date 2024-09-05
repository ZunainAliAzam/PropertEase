import express from "express";
import postRoute from "./routes/post.route.js";

const app = express();

const port = 3000

app.use(express.json());

app.use("/api/posts", postRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
