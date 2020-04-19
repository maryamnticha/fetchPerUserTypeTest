const express = require("express");
const Router = express.Router();
const commentController = require("../controlers/commentController");

Router.post("/profile/:user/post/:post", commentController.addcomment);
Router.put("/profile/:user/post/:id", commentController.editcomment);
Router.delete("/profile/:user/post/:post", commentController.deletecomment);
Router.get("/profile/:user/post/:id", commentController.getcomment);
module.exports = Router;
