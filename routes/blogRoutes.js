const express = require("express");
const blogController = require("../controllers/blogController.js");
const commentController = require("../controllers/commentController.js");

const router = express.Router();

router.post("/create_blog", blogController.createBlog);
router.delete("/delete_blog/:id", blogController.deleteBlog);
router.get("/getAll_blog", blogController.getAllBlogs);
router.post("/create_comment", commentController.postComment);

module.exports = router;
