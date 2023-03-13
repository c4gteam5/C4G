const express = require('express');
const adminAuthRouter = express.Router();
const adminAuthController = require('./../controllers/adminAuthController');


//user endpoints that are open to everyone
adminAuthRouter.post('/login', adminAuthController.login);
adminAuthRouter.get('/logout', adminAuthController.logout);
adminAuthRouter.get('/isLoggedIn', adminAuthController.isLoggedIn);


// protects all of the routes that are below this line of code
adminAuthRouter.use(adminAuthController.protect);


adminAuthRouter.post('/signup', adminAuthController.signup);

module.exports = adminAuthRouter;