const express = require("express");
const cors = require("cors");
const db = require("./config/db.js");

const app = express();

// middlewares
app.use(cors());
db.sync().then(() => {
  console.log("Database Connected !! ");
});

// app.use(blogApi);

app.listen(5001, () => {
  console.log(`Server is listening at 5001`);
});
