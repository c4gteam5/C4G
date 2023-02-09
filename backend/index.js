const express = require("express");
const app = express();
const port = 8000;

const cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions));

app.get("/", (req, res, next) => {
  var newDate = new Date();
  var datetime = newDate.toLocaleString();
  return res.json({ "datetime": datetime, message: "Hello World" });
});

app.listen(port, () => {
  console.log(`C4G app listening on port ${port}`);
});
