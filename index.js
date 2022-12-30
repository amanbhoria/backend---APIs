const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const apiFile = require("./data.json");

app.use(cors());

const port = process.env.PORT || 3000;

router.get("/", (req, res) => {
  res.send("Hello, This is live");
});

// app.get("/users", (req, res) => {
//   res.send(apiFile);
// });

router.get("/users", (req, res) => {
  res.send(apiFile);
});

router.post("/user/signup", (req, res, next) => {
  //
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is started on port: ${port}`);
});
