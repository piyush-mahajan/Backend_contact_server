const asyncHandler = require("express-async-handler");

const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  // token will come form the header of the request
  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader) {
    jwt.verify(authHeader, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("Invalid Token");
      }
      req.user = decoded.user;
      next();
    });
    if (!authHeader) {
      res.status(401);
      throw new Error("Invalid Token user is not autherized ");
    }
  }
});
module.exports = validateToken;
