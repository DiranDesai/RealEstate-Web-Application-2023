const express = require("express");

const router = express.Router();


const { authUser, register, getCurrentUser, getUser, updateUserDetails, changePassword, uploadProfilePic, followUser, unFollowUser, checkUserFollowingController, getUserNotifications } = require("../controllers/userController");
const protect = require("../middlewares/protect");

router.route("/login").post(authUser);
router.route("/account").post(register);
router.route("/getMe").get(protect, getCurrentUser);
router.route("/getUser/:id").get(protect, getUser);
router.route("/follow/:userId").post(protect, followUser);
router.route("/unFollow/:userId").post(protect, unFollowUser);
router.route("/checkFollowing/:userId").get(protect, checkUserFollowingController);
router.route("/changePassword").post(protect, changePassword);
router.route("/updateMe").put(protect, updateUserDetails);
router.route("/uploadProfilePic").post(protect, uploadProfilePic);
router.route("/notifications").get(protect, getUserNotifications)

module.exports = router;
