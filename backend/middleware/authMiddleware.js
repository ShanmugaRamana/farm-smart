const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) return res.status(401).json({ message: "Access Denied" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(verified.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
