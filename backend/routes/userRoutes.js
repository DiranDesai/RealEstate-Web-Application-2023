const express = require("express");

const router = express.Router();


const { authUser, register, getCurrentUser, updateUserDetails, changePassword, uploadProfilePic } = require("../controllers/userController");
const protect = require("../middlewares/protect");

router.route("/login").post(authUser);
router.route("/account").post(register);
router.route("/getMe").get(protect, getCurrentUser);
router.route("/changePassword").post(protect, changePassword);
router.route("/updateMe").put(protect, updateUserDetails);
router.route("/uploadProfilePic").post(protect, uploadProfilePic);

module.exports = router;