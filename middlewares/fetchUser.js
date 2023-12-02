const jwt = require("jsonwebtoken");
const User = require("../Models/user");
require("dotenv").config();

const fetchUser = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      throw new Error();
    }
    const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
    
    const user1 = await User.findOne({ _id: decodeToken.id });
    if (!user1) {
      throw new Error();
    }
    req.user = user1;
    next();
  } catch (e) {
    res.status(401).send("Please Authenticate");
  }
};
module.exports = fetchUser;