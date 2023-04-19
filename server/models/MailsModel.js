const mongoose = require("mongoose");

const MailSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Mail", MailSchema);