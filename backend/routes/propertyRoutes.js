const express = require("express");

const router = express.Router();


const { createProperty, getAllProperties, getProperty, addPropertyReview, getPropertyReviews } = require("../controllers/propertyController");
const protect = require("../middlewares/protect");

router.route("/createProperty").post(protect, createProperty);
router.route("/getProperties").get(protect, getAllProperties);
router.route("/getProperty/:id").get(protect, getProperty);
router.route("/property/:id/review").post(protect, addPropertyReview).get(protect, getPropertyReviews);


module.exports = router;