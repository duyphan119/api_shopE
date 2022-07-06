const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 1010;

app.listen(port, () => {
  console.log("app is listening 11111", port);
});
