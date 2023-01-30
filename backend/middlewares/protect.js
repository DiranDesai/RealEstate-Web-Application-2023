const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];

        if (!token) {
            res.status(401).json({
                msg: "No token available"
            });
        }

        const {userId} = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findOne({_id: userId}).select("-password");
        
        next();
        
    } else {
        res.status(401).json({
            msg: "Not authorized"
        })
    }
    
}

module.exports = protect