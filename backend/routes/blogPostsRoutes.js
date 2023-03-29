const express = require('express');
const blogPostsRoutes = express.Router();
const blogPostsController = require("../controllers/blogPostsController")
const adminAuthController = require('./../controllers/adminAuthController');


blogPostsRoutes.get("/getall", blogPostsController.getAllBlogPosts)

// protects all of the routes that are below this line of code
blogPostsRoutes.use(adminAuthController.protect);

blogPostsRoutes.post("/create", blogPostsController.createPost)

// delete blog post using blog post ID
blogPostsRoutes.route("/:id").delete(blogPostsController.deleteBlogPost).patch(blogPostsController.updateBlogPost)


module.exports = blogPostsRoutes;

