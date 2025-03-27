const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const Comments = db.define("Comments", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  blogId: { type: DataTypes.INTEGER, allowNull: false },
  text: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = Comments;
