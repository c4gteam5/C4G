const mongoose = require('mongoose');
const validator = require('validator');

const volunteerSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, 'Please tell us your first name!']
    },
    lastName: {
        type: String,
        required: [true, 'Please tell us your last name!']
      },
    email: {
      type: String,
      required: [true, 'please provide email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email']
    },
    phoneNumber: {
        type     : Number,
        required : true,
        unique   : true,
        validate : {
          validator : Number.isInteger,
          message   : '{VALUE} is not an integer value'
        }
      },
      profession: {
        type: String,
        required: [true, 'Please tell us your profession!']
      },
      interest: {
        type: String,
        required: [true, 'Please tell us your areas of interest!']
      },
    createdAt: { type : Date, default: Date.now}
  });


  const Volunteer = mongoose.model('Volunteer', volunteerSchema);
  module.exports = Volunteer;