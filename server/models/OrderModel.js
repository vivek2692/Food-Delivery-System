const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true,
        unique: true
    },
    
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    items: [
        {
            item_name: {
                type: String,
                required: true
            },

            item_quantity: {
                type: Number,
                default: 1
            }
        }
    ],

    total_amount: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        default: "Pending"
    },

    payment: {
        type: String,
        default: "Pending"
    }
}, {timestamps: true});

module.exports = mongoose.model("Order", OrderSchema);