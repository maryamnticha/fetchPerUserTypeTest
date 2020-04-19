const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
  body: String,
  user: String,
});
const userSchema = new mongoose.Schema({
  name: String,
  userType: String,
  email: String,
  password: String,
});

const postSchema = new mongoose.Schema({
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
      autopopulate: true,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: String,
  postType: String,
  body: String,
  date: String,
  link: String,
});

Post = mongoose.model("post", postSchema);
User = mongoose.model("user", userSchema);
Comment = mongoose.model("comment", commentSchema);
module.exports = { User, Post, Comment };
