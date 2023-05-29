const PropertyModal = require("../models/propertyModel");

const createProperty = async (req, res) => {
    try {
        const createdProperty = await PropertyModal.create({
            userId: req.user._id,
            ...req.body
        });
    
       res.status(201).json({
        property: createdProperty
       });
    } catch (error) {
        
    }
    
}

const getCurrentUserProperties = async (req, res) => {
    try {
        const properties = await PropertyModal.find({userId: req.user._id});
        res.status(200).json({properties: properties});
    } catch (error) {
        
    }
}

const getAllProperties = async (req, res) => {
    try {
        const properties = await PropertyModal.find({}).limit(8);
        res.status(200).json({properties: properties});
    } catch (error) {
        
    }
}

const getProperty = async (req, res) => {
    const {id} = req.params;
    try {
        const property = await PropertyModal.findById({_id: id});
        return res.status(201).json({property})
    } catch (error) {
        
    }
}

const addPropertyReview = async (req, res) => {
    const params = req.params;
    console.log(params);
}

const getPropertyReviews = async (req, res) => {
    const params = req.params;
    console.log(params);
}

module.exports = {
    createProperty,
    getCurrentUserProperties,
    getAllProperties,
    getProperty,
    addPropertyReview,
    getPropertyReviews
}