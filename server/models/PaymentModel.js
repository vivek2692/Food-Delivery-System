const mongoose = require("mongoose");
const Order = require('./OrderModel');

const PaymentSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    order_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    status: {
        type: String,
        default: "Pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
