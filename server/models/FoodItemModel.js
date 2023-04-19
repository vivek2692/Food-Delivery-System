const mongoose = require("mongoose");

const FoodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    img: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    availability: {
        type: Boolean,
        default: true,
    },

    quantity: {
        type: Number,
        required: true,
        default: 5
    },

}, {timestamps: true});

module.exports = mongoose.model("FoodItem", FoodItemSchema);