const db = require("../config/db.js");

exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    await db.query("INSERT INTO Blogs (title, content) VALUES (?, ?)", [
      title,
      content,
    ]);

    return res.json({ message: "Blog added successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query("DELETE FROM Blogs WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Blog not found" });
    }

    return res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const [blogs] = await db.query("SELECT * FROM Blogs");
    return res
      .status(200)
      .json({ message: "All blogs fetched successfully", blogs });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.addComment = async (req, res) => {
  try {
    const { blog_id, comment } = req.body;

    if (!blog_id || !comment) {
      return res
        .status(400)
        .json({ error: "Blog ID and comment are required" });
    }

    // Check if blog exists
    const [blog] = await db.query("SELECT id FROM Blogs WHERE id = ?", [
      blog_id,
    ]);
    if (blog.length === 0) {
      return res.status(404).json({ error: "Blog not found" });
    }

    // Insert comment
    await db.query("INSERT INTO Comments (blog_id, comment) VALUES (?, ?)", [
      blog_id,
      comment,
    ]);

    return res.status(201).json({ message: "Comment added successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
