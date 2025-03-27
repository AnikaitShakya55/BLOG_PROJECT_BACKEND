const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Blogs = sequelize.define("Blogs", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = Blogs;
