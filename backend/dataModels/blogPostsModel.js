const mongoose = require('mongoose');

const blogPostsSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, 'Title is required']
    },
    content: {
        type: String,
        required: [true, 'Content is required']
      },
    linkToPicture: {
      type: String

    },
    createdAt: { type : Date}
  });


  const BlogPosts = mongoose.model('BlogPosts', blogPostsSchema);
  module.exports = BlogPosts;