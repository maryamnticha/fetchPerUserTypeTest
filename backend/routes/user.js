const express = require("express");
const Router = express.Router();
const userController = require("../controlers/useController");
const { validator, registerRules } = require("../middleware/validation");
const isAuth = require("../middleware/passport-validator");
Router.post("/register", registerRules(), validator, userController.register);
Router.post("/login", userController.login);
Router.get("/profile", isAuth(), (req, res) => res.json(req.user));
module.exports = Router;
