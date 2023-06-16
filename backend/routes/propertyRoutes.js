const express = require("express");

const router = express.Router();


const { createProperty, getAllProperties, getProperty, createPropertyReview, getPropertyReviews, getCurrentUserProperties } = require("../controllers/propertyController");
const protect = require("../middlewares/protect");

router.route("/createProperty").post(protect, createProperty);
router.route("/getProperties").get(protect, getAllProperties);
router.route("/currentProperties").get(protect, getCurrentUserProperties);
router.route("/getProperty/:id").get(protect, getProperty);
router.route("/property/:id/review").post(protect, createPropertyReview).get(protect, getPropertyReviews);


module.exports = router;