const express = require("express");

const router = express.Router();


const { createProperty } = require("../controllers/propertyController");
const protect = require("../middlewares/protect");

router.route("/createProperty").post(protect, createProperty);


module.exports = router;