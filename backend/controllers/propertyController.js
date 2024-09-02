const PropertyModal = require("../models/propertyModel");

const createProperty = async (req, res) => {
  try {
    const createdProperty = await PropertyModal.create({
      userId: req.user._id,
      ...req.body,
    });

    res.status(201).json({
      property: createdProperty,
    });
  } catch (error) {}
};

const getCurrentUserProperties = async (req, res) => {
  try {
    const properties = await PropertyModal.find({ userId: req.user._id }).limit(
      3
    );
    res.status(200).json({ properties: properties });
  } catch (error) {}
};

const getAllProperties = async (req, res) => {
  try {
    const numPerPage = 8;
    const page = req.query.page;
    const properties = await PropertyModal.find({})
      .skip((page - 1) * numPerPage)
      .sort({ createdAt: -1 })
      .limit(8);
    const propertiesCount = await PropertyModal.countDocuments();
    const pagesCount = Math.ceil(propertiesCount / numPerPage);
    res.status(200).json({ properties: properties, pages: pagesCount });
  } catch (error) {}
};

const getProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await PropertyModal.findById({ _id: id });
    return res.status(201).json({ property });
  } catch (error) {}
};

const createPropertyReview = async (req, res) => {
  const { id } = req.params;
  const { rating, message } = req.body;

  const property = await PropertyModal.findById({ _id: id });

  if (property) {
    const alreadyReviewed = property.reviews.find(
      (r) => r.userId.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      res.status(400).json({ message: "Product already reviewed" });
      //throw new Error('Product already reviewed');
    }

    const review = { userId: req.user._id, rating, message };
    property.reviews.push(review);

    const savedReview = await property.save();

    if (savedReview) {
      return res
        .status(201)
        .json({ review: property.reviews[property.reviews.length - 1] });
    }
  } else {
    return res.status(401).json({ message: "Property not found" });
  }
};

const getPropertyReviews = async (req, res) => {
  const { id } = req.params;

  try {
    const property = await PropertyModal.findById({ _id: id });
    if (property) {
      return res.status(200).json({ reviews: property.reviews });
    }
  } catch (error) {}
};

const propertySearching = async (req, res) => {
  const { location, budget: [minPrice, maxPrice]} = req.body;



  try {
    const results = await PropertyModal.find({
      address: { $regex: location, $options: "i" },
      price: {
        $gte: minPrice,
        $lte: maxPrice,
      },
    });

    console.log(results);

    return res.status(200).json({ properties: results });
  } catch (error) {}
};

module.exports = {
  createProperty,
  getCurrentUserProperties,
  getAllProperties,
  getProperty,
  createPropertyReview,
  getPropertyReviews,
  propertySearching,
};
