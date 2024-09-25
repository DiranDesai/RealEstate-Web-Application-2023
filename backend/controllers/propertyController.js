const NotificationModal = require("../models/notificationModel");
const PropertyModal = require("../models/propertyModel");
const User = require("../models/userModel");


const mvFile = (file, path) => {
  return new Promise((resolve, reject) => {
    file.mv(path, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};


const createProperty = async (req, res) => {
  delete req.body.images;
  let files = req.files;

  let position = JSON.parse(req.headers.position)

  try {

    const imagesPaths = [];

    for(let i = 0; i < 2;i++){
      const imageFile = files[`file${i}`]

      if (!imageFile) {
        continue
      }

      mvFile(imageFile, `./frontend/public/uploads/${imageFile.name}`)
      imagesPaths.push({imgUrl: `/uploads/${imageFile.name}`});
    }

    console.log(imagesPaths);


    

    const createdProperty = await PropertyModal.create({
      userId: req.user._id,
      ...req.body,
      position: position,
      images: imagesPaths
    });
    // Notify users when a listing is created
    const users = await User.find({});
    for(const user of users){
      const createdNotification = await NotificationModal.create({
        userId: user._id,
        propertyId: createdProperty._id,
        type: "new_listing",
        message: "New Listing Uploaded"
      })

      await createdNotification.save();
    }
    // End of Notifying


    res.status(201).json({
      property: createdProperty,
    });

  } catch (error) {
    console.log(error)
  }

 
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
  const searchingData = req.body;
  const { location } = searchingData;
  let minPrice,
    maxPrice = null;

  if (minPrice == null || maxPrice == null) {
    minPrice = 0;
    maxPrice = 20000;
  }

  if (searchingData.hasOwnProperty("budget")) {
    [minPrice, maxPrice] = searchingData.budget;
  }

  console.log(minPrice, maxPrice);

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
