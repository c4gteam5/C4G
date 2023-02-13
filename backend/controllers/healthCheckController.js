exports.checkAPIHealth = async (req, res) => {
  var newDate = new Date();
  var datetime = newDate.toLocaleString();
  return res.status(200).json({ datetime: datetime, message: "Hello World" });
};
