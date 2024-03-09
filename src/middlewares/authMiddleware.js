const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const requireAuth = (req, res, next) => {
  let token = req?.cookies?.jwt;

  if (!token) {

      // Get the Authorization header from the request
      const authHeader = req.headers['authorization'];
      if (authHeader) {
          const headerToken = authHeader.split(' ')[1];

          if (headerToken) {
              token = headerToken;
          }
      }
  }

 

  // check json web token exists
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "You are not authorized",
          error: err.message,
        });
        //res.redirect('/v1/user/login'); // Redirect if token is not valid
      } else {
        next();
      }
    });
  } else {
    return res.status(401).send({
      success: false,
      message: "You are not authorized",
      error: "Token not found",
    });
    //res.redirect('/v1/user/login'); // Redirect if token is not present
  }
};

// check current user
const checkUser = (req, res, next) => {
  // console.log("protocol = ", req.protocol); // Output: "http" or "https"
  // console.log("host = ", req.get('host')); // Output: "example.com"
  // console.log("originalUrl = ", req.originalUrl); // Output: "/?param1=value1&param2=value2"
  // console.log("hostname = ", req.hostname); // Output: "example.com"
  // console.log("path = ", req.path); // Output: "/"
  // console.log("query = ", req.query); // Output: { param1: "value1", param2: "value2" }
  // console.log("method = ", req.method); // Output: "GET"
  // console.log("url = ", req.url); // Output: "/?param1=value1&param2=value2

  let { token } = req.body;

  if (!token) {
    token = req.cookies.jwt;
  }

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
      } else {
        const user = await userModel.findById(decodedToken.id);
        res.locals.user = user;
      }
      next();
    });
  } else {
    res.locals.user = null;
    next();
  }
};


module.exports = { requireAuth, checkUser };
