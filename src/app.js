const express = require("express");
require("./db/conn");
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require("./route/users");
const imageRouter = require("./route/images");

app.use(express.json());
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/upload-image", imageRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(` App listening at http://localhost:${port}`);
});
