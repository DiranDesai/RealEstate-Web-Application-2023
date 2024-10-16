const asyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require("../models/userModel");
const NotificationModal = require("../models/notificationModel")

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

const followUser = async (req, res) => {
    const {userId} = req.params;
    const currentUserId = req.user._id.toString();
    const currentUser = await User.findById({_id: currentUserId});
    const userToFollow = await User.findById({_id: userId});


    if (!userToFollow) {
        return res.status(404).json({msg: "user is not found"});
    }

    const followers = userToFollow.followers;

    if (followers.includes(currentUserId.toString())) {
        return res.status(501).json({msg: "user already followed"});
    }

    userToFollow.followers.push(currentUserId.toString());
    currentUser.following.push(userId);

    await userToFollow.save();
    await currentUser.save();

}

const unFollowUser = async (req, res) => {
    const {userId} = req.params;
    const currentUserId = req.user._id.toString();

    const userToFollow = await User.findById({_id: userId});

    userToFollow.followers.filter(userId => userId != currentUserId);

    await userToFollow.save();
}

const checkUserFollowingController = async (req, res) => {
    const {userId} = req.params;

    const currentUserId = req.user._id.toString();
    const currentUser = await User.findById({_id: currentUserId});
    const userToFollow = await User.findById({_id: userId});

    const followers = userToFollow.followers;

    if (followers.includes(currentUserId.toString())) {
        return res.status(201).json({follow: true});
    } else {
        return res.status(201).json({follow: false});
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

const getUserNotifications = async (req, res) => {
    try {
      const notifications = await NotificationModal.find({userId: req.user._id}).populate("userId", "username profileUrl")
      return res.status(200).json({notifications: notifications});
    } catch (error) {
      
    }
  }
  

module.exports = {
    authUser,
    register,
    getCurrentUser,
    getUser,
    followUser,
    unFollowUser,
    checkUserFollowingController,
    updateUserDetails,
    changePassword,
    uploadProfilePic,
    getUserNotifications
}