const express = require('express');
const adminAuthRouter = express.Router();
const adminAuthController = require('./../controllers/adminAuthController');


//user endpoints that are open to everyone
adminAuthRouter.post('/signup', adminAuthController.signup);
adminAuthRouter.post('/login', adminAuthController.login);
adminAuthRouter.get('/logout', adminAuthController.logout);

module.exports = adminAuthRouter;