const express = require('express');
const volunteerRoutes = express.Router();
const volunteerController = require("../controllers/volunteerController")
const adminAuthController = require('./../controllers/adminAuthController');


volunteerRoutes.post("/signup", volunteerController.signup)


// protects all of the routes that are below this line of code
volunteerRoutes.use(adminAuthController.protect);


volunteerRoutes.get("/getall", volunteerController.getAllVolunteers)


module.exports = volunteerRoutes;