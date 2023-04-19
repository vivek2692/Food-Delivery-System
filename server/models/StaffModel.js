const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
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
        unique: true,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Staff", StaffSchema);