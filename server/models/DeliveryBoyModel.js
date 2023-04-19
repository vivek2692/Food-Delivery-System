const mongoose = require("mongoose");

const DeliveryBoySchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    contact: {
        type: String,
        required: true
    },

    availability: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});

module.exports = mongoose.model("DeliveryBoy", DeliveryBoySchema);