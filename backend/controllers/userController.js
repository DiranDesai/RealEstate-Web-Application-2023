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

const getUser = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findById({_id: id}).select("-password");
        return res.status(201).json({user})
    } catch (error) {
        
    }
}

const updateUserDetails = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({_id: req.user._id}, req.body);
        return res.status(200).json({message: "Update Successfully"});
    } catch (error) {
        console.log(error);
    }
}

const changePassword = async (req, res) => {
    const currentUser = await User.findById({_id: req.user._id});
    const {currentPassword, newPassword} = req.body;
    if (!await (checkPassword(currentUser, currentPassword))) {
        return res.status(501).json({passwordMatch: false, message: "Please enter your current password"});
    } else {
        const generateSalt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newPassword, generateSalt);
        currentUser.password = hashPassword;
        currentUser.save();
        return res.status(201).json({passwordChanged: true, message: "Password changed successfully"});
    }
}


const uploadProfilePic = async (req, res) => {
    const file = req.files.file;

    console.log(file);

    file.mv(`./frontend/public/uploads/${file.name}`, async (error) => {
        if (error) {
            console.error(error);
            return res.status(500).send(error);
        }
        await User.findOneAndUpdate({_id: req.user._id}, {profileUrl: `/uploads/${file.name}`});
    });
}

function generateToken(userId) {
    return jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "50d"});
}

async function checkPassword(user, password) {
    return await bcrypt.compare(password, user.password); 
}


module.exports = {
    authUser,
    register,
    getCurrentUser,
    getUser,
    updateUserDetails,
    changePassword,
    uploadProfilePic
}