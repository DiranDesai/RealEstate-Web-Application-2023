const asyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require("../models/userModel");

const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if (!user) {
        throw new Error("User with that email does not exist");
    } 

    if (user && await (checkPassword(user, password))) {
        return res.status(200).json({
            ...user,
            token: generateToken(user._id)
        });
    } else {
        res.status(401)
        throw new Error("Wrong password");
    }
})

const register = async (req, res) => {
    const {username, email, password1, agreeStatus} = req.body;
    
    const checkUserExist = await User.findOne({email});

    if (checkUserExist) {
        res.json({msg: "user with that email already exits"});
        console.log(checkUserExist);
        return
    }

    const generateSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password1, generateSalt);

    const createUser = await User.create({...req.body, isAdmin: false, password: hashPassword});

    if (createUser) {
        const currentUser = await User.findById({_id: createUser._id}).select("-password");
        res.status(200).json({
            ...currentUser,
            token: generateToken(currentUser._id)
        });
    }
}

const getCurrentUser = async (req, res) => {
    return res.json({...req.user});
}

function generateToken(userId) {
    return jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "30d"});
}

async function checkPassword(user, password) {
    return await bcrypt.compare(password, user.password); 
}


module.exports = {
    authUser,
    register,
    getCurrentUser
}