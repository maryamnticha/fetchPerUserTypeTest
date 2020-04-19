const { Post } = require("../models/userpost");
const { ObjectID } = require("mongodb");
module.exports = postController = {
  addpost: async (req, res) => {
    const user = ObjectID(req.params.id);
    const { title, body, postType, date, link } = req.body;
    try {
      const newPost = new Post({
        user,
        title,
        body,
        postType,
        date,
        link,
      });
      try {
        const addres = await newPost.save();
        return res.status(210).json(addres);
      } catch (error) {
        console.log(error);
        res.status(500).json({ errors: error });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: error });
    }
  },

  editpost: async (req, res) => {
    const id = ObjectID(req.params.id);
    const { title, body, link } = req.body;

    try {
      const searchEdit = await Post.findOneAndUpdate(
        { _id: id },
        { $set: { title, body, link } }
      );
      if (searchEdit) return res.status(210).json({ searchEdit });
      else return res.status(500).json({ errors: error });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },

  deletepost: async (req, res) => {
    const id = ObjectID(req.params.id);
    try {
      searchdelete = await Post.findOneAndDelete({ _id: id });
      if (searchdelete)
        return res.status(210).json({ msg: "Post is successfully deleted" });
      else return res.status(500).json({ errors: error });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },

  getpost: async (req, res) => {
    const user = ObjectID(req.params.id);
    try {
      const searchpostRes = await Post.find({ user });
      if (searchpostRes) return res.json(searchpostRes);
      else return res.status(210).json({ errors: error });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: error });
    }
  },

  getonepost: async (req, res) => {
    const id = ObjectID(req.params.id);
    try {
      const searchonepostRes = await Post.findOne({ _id: id }).populate(
        "comments"
      );

      return res.json(searchonepostRes);
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  fetchAllPost: async (req, res) => {
    const { postType1 } = req.body;
    console.log(req.body);
    try {
      const searchonepostRes = await Post.find({
        postType: postType1,
      }).populate("comments");

      return res.json(searchonepostRes);
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
};
