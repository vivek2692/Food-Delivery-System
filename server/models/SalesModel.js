const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    img: {
        type: String,
    },

    price: {
        type: Number,
        required: true
    },

    sales: {
        type: Number,
        default: 0
    },

}, {timestamps: true});

module.exports = mongoose.model("Sell", SalesSchema);