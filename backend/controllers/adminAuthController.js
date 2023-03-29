const jwt = require("jsonwebtoken");
const Admin = require("../dataModels/adminModel");
const AppError = require('./../utils/appError');
const { promisify } = require('util');

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (admin, statusCode, res) => {
  const token = signToken(admin._id);

  // const cookieOptions = {
  //   expires: new Date(
  //     Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
  //   ),
  //   //following code means we cannot manipulate the cookie
  //   httpOnly: true,
  // };

  //if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  //res.cookie("jwt", token, cookieOptions);

  //remove password from output
  admin.password = undefined;

  console.log("sending token")
  return res.status(statusCode).json({ token });
};

//sign up method... you gotta specifically state what to save in the new user
exports.signup = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      message: "invalid body",
    });
  }

  let newAdmin
  try {
    newAdmin = await Admin.create({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      passwordChangedAt: req.body.passwordChangedAt,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }

  createSendToken(newAdmin, 201, res);
};

exports.login = async (req, res, next) => {
  console.log("called login endpoint")
  const { email, password } = req.body;
  console.log(email)

  //1) check if email and password exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }
  //2) check if user exists and password is correct
  const admin = await Admin.findOne({ email: email }).select("+password");

  if (!admin || !(await admin.correctPassword(password, admin.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  //3) if everything is ok, send token to client
  createSendToken(admin, 200, res);
};

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};


exports.protect = async (req, res, next) => {

  //1) get token and check if it exists
  let token;
  // eslint-disable-next-line prettier/prettier
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(403).json({
      message: 'You Are Not Logged In'
  })
  }

  if (token === 'loggedout') {
    return res.status(403).json({
      message: 'You Are Not Logged In'
  })
  }

  console.log("token")
  console.log(token)

  //2) verify the token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3) if verification is successful, check if user still exists
  const freshUser = await Admin.findById(decoded.id);
  if (!freshUser) {
    return res.status(403).json({
      message: 'Admin no longer exists'
  })  }

  //4) Check if user changed password after token was issued
  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return res.status(403).json({
      message: 'Admin changed password. Must login again'
  })  }

  //grant access to protected route
  req.user = freshUser;
  next();
};


exports.isLoggedIn = async (req, res, next) => {

  //1) get token and check if it exists
  let token;
  // eslint-disable-next-line prettier/prettier
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(403).json({
      message: 'You Are Not Logged In'
  })
  }

  if (token === 'loggedout') {
    return res.status(403).json({
      message: 'You Are Not Logged In'
  })
  }

  //2) verify the token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3) if verification is successful, check if user still exists
  const freshUser = await Admin.findById(decoded.id);
  if (!freshUser) {
    return res.status(403).json({
      message: 'Admin no longer exists'
  })  }

  //4) Check if user changed password after token was issued
  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return res.status(403).json({
      message: 'Admin changed password. Must login again'
  })  }

  return res.status(200).json({
    message: 'success'
  });
};

