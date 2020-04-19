const { Comment, Post } = require("../models/userpost");
const { ObjectID } = require("mongodb");
module.exports = commentController = {
  addcomment: async (req, res) => {
    const post = ObjectID(req.params.post);
    const user = ObjectID(req.params.user);
    const { body } = req.body;
    try {
      const newComment = new Comment({
        post,
        body,
        user,
      });
      try {
        Comment.create(newComment, (err, doc) => {
          if (err) res.status(503).json({ errors: err });
          else {
            Post.findByIdAndUpdate(
              post,
              { $push: { comments: doc } },
              { new: true },
              (err, data) => {
                if (err) res.status(504).json({ errors: err });
                else {
                  res.status(200).json(newComment);
                }
              }
            );
          }
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ errors: error });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: error });
    }
  },
  editcomment: async (req, res) => {
    const { id } = req.body;
    const { body } = req.body;

    try {
      const searchEdit = await Comment.findOneAndUpdate(
        { _id: id },
        { $set: { body } }
      );
      return res.status(210).json(searchEdit);
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  deletecomment: async (req, res) => {
    const { id } = req.body;
    try {
      searchdelete = await Comment.findOneAndDelete(id);
      if (searchdelete)
        return res.status(210).json({ msg: "Comment is successfully deleted" });
      else return res.status(400).json({ errors: error });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  getcomment: async (req, res) => {
    const post = ObjectID(req.params.id);
    try {
      const searchpostRes = await Comment.find({ post });
      if (searchpostRes) return res.json(searchpostRes);
      else return res.status(500).json({ errors: error });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: error });
    }
  },
};
