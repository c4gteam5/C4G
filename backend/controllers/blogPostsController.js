const Post = require("../dataModels/blogPostsModel");


exports.createPost = async (req, res) => {
    if (!req.body) {
      return res.status(400).json({
        message: "invalid body",
      });
    }
  
    try {
      await Post.create({
        title: req.body.title,
        content: req.body.content,
        linkToPicture: req.body.link
        
      });
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  
    return res.status(201).json({
      message: "blog post created",
    });
  };


  exports.getAllBlogPosts = async (req, res) => {
    const posts = await Post.find({});
  
    return res.status(200).json({
      posts,
    });
  };