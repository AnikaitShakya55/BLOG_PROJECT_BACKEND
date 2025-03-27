const db = require("../config/db.js");

exports.postComment = async (req, res) => {
  try {
    const { blogId, comment } = req.body;
    await db.query(`INSERT INTO Comments(blogId,Text) VALUES (?,?)`, [
      blogId,
      comment,
    ]);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
