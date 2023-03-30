const Volunteer = require("../dataModels/volunteerModel");

//sign up method... you gotta specifically state what to save in the new user
exports.signup = async (req, res) => {
  console.log("hit endpoint colunteer create")
  if (!req.body) {
    console.log("invalid body")
    return res.status(400).json({
      message: "invalid body",
    });
  }

  try {
    await Volunteer.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      profession: req.body.profession,
      interest: req.body.interest,
    });
  } catch (err) {
    console.log("seomthing went wrong")
    return res.status(400).json({
      message: err.message,
    });
  }

  return res.status(201).json({
    message: "submission received",
  });
};

exports.getAllVolunteers = async (req, res) => {
  const volunteers = await Volunteer.find({});

  return res.status(200).json({
    volunteers,
  });
};
