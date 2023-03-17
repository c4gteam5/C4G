const Post = require("../dataModels/blogPostsModel");

exports.createPost = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      message: "invalid body",
    });
  }

  let post

  try {
    post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      linkToPicture: req.body.link,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res.status(201).json({
    post,
  });
};

exports.getAllBlogPosts = async (req, res) => {
  const posts = await Post.find({});

  return res.status(200).json({
    posts,
  });
};



exports.updateBlogPost = async (req, res) => {
  const { id } = req.params;
  let post;

  if (!req.body) {
    return res.status(400).json({
      message: "invalid body",
    });
  }


  //NOTE: you must pass either title, content, and/or link
  try {
    post = await Post.findByIdAndUpdate(id, req.body,  {new: true});
    if (!post) {
      return res.status(400).json({
        message: "Blog post ID does not exist",
      });
    }

    
  } catch(err) {
    return res.status(400).json({
      message: err.message,
    });
  }

  res.status(200).json({post});


}

exports.deleteBlogPost = async (req, res) => {
  const { id } = req.params;
  let post;

  try {
    post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({
        message: "Blog post ID does not exist",
      });
    }

    
  } catch {
    return res.status(404).json({
      message: "Blog post ID does not exist",
    });
  }


  return res.status(200).json({
    message: "Blog post deleted",
  });
};
