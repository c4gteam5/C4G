const express = require('express');
const healthCheckRoute = express.Router();
const healthCheckController = require("../controllers/healthCheckController")

healthCheckRoute.get("/healthcheck", healthCheckController.checkAPIHealth)


module.exports = healthCheckRoute;