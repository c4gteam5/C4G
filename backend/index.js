const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

//routes
const healthCheckRoute = require("./routes/healthCheckRoute");
const volunteerRoutes = require("./routes/volunteerRoutes");

//global middleware
//set HTTP Security header
app.use(helmet());

//data sanitization against NoSQL query injection
app.use(mongoSanitize());
//data sanitization against XSS
app.use(xss());


var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions));


dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(() => {console.log('DB connected');});

// parse application/json
app.use(bodyParser.json())

// API Routes
app.use("/api", healthCheckRoute);
app.use("/api/volunteers", volunteerRoutes);

app.listen(port, () => {
  console.log(`C4G app listening on port ${port}`);
});
