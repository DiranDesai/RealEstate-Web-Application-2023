const mongoose = require("mongoose");


const reviewSchema = mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: true,
})

const propertySchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    monthlyTax: {
        type: Number,
        required: true,
    },
    yearlyTax: {
        type: Number,
        required: true,
    },
    position: {
        type: Array,
        required: true,
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
});


const Property = mongoose.model('Property', propertySchema)

module.exports = Property;
