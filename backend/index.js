const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
//parses cookie
const cookieParser = require('cookie-parser');

//routes
const healthCheckRoute = require("./routes/healthCheckRoute");
const volunteerRoutes = require("./routes/volunteerRoutes");
const adminAuthRoutes = require("./routes/adminAuthRoutes");
const blogPostsRoutes = require("./routes/blogPostsRoutes");

//global middleware
//set HTTP Security header
app.use(helmet());
// parse cookies
app.use(cookieParser());
//data sanitization against NoSQL query injection
app.use(mongoSanitize());
//data sanitization against XSS
app.use(xss());

var corsOptions = {
  origin: "https://c4g-frontend.onrender.com",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("DB connected");
});

// parse application/json
app.use((req, res, next) => {
  bodyParser.json()(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: "malformed JSON" }); // Bad request
    }

    next();
  });
});


// API Routes
app.use("/api", healthCheckRoute);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/admin", adminAuthRoutes)
app.use('/api/blog', blogPostsRoutes)


//catch any requests to non-existent API endpoints
app.use(function (req, res) {
  // Invalid request
  res.status(404).json({
    error: {
      message: "Invalid Request"
    }
  });
});

app.listen(port, () => {
  console.log(`C4G app listening on port ${port}`);
});