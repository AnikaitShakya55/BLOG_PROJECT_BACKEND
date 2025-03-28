const express = require("express");
const cors = require("cors");
const db = require("./config/db.js");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.getConnection()
  .then((connection) => {
    console.log("Database Connected !! ");
    connection.release();
  })
  .catch((error) => {
    console.error("Database Connection Failed:", error);
  });

app.use("/blog", require("./routes/blogRoutes.js"));

app.listen(5001, () => {
  console.log(`Server is listening at 5001`);
});
