const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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

    password: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);