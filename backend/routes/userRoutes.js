const express = require("express");

const router = express.Router();


const { authUser, register, getCurrentUser } = require("../controllers/userController");
const protect = require("../middlewares/protect");

router.route("/login").post(authUser);
router.route("/account").post(register);
router.route("/getMe").get(protect, getCurrentUser);

module.exports = router;