const express = require("express");
const blogController = require("../controllers/blogController.js");

const router = express.Router();

router.post("/create_blog", blogController.createBlog);

module.exports = router;
