const db = require("../config/db.js");

exports.postComment = async (req, res) => {
  try {
    const { blog_Id, comment } = req.body;
    await db.query(`INSERT INTO Comments(blog_Id,comment) VALUES (?,?)`, [
      blog_Id,
      comment,
    ]);
    return res.status(200).json({ message: "Comment Added" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE INTO Comments WHERE id = ?", [id]);
    return res.send(200).json({
      message: "Comment Deleted SuccessFully",
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
