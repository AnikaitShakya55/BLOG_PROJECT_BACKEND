const db = require("../config/db.js");

exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    await db.query(`INSERT INTO Blogs (title,content) VALUES (?,?)`, [
      title,
      content,
    ]);

    return res.json({ message: "Blog added Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query(`DELETE INTO Blogs WHERE id  = ?`, [id]);
    return res.status(200).json({ message: "Delete Blog Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const [blogs] = await db.query(`SELECT * FROM Blogs`);
    return res.send(200).json({ message: "All blogs get Fetched" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};


