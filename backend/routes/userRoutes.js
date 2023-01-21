const express = require("express");

const router = express.Router();


const { authUser } = require("../controllers/userController");

router.route("/login").get(authUser);

module.exports = router;