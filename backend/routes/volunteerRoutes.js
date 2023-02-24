const express = require('express');
const volunteerRoutes = express.Router();
const volunteerController = require("../controllers/volunteerController")

volunteerRoutes.post("/signup", volunteerController.signup)
volunteerRoutes.get("/getall", volunteerController.getAllVolunteers)


module.exports = volunteerRoutes;