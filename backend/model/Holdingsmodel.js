const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema(
  {
    product: { type: String, default: "CNC" }, // optional
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    avg: { type: Number, required: true },
    price: { type: Number, required: true },
    net: { type: String, default: "0.00%" },
    day: { type: String, default: "0.00%" },
    isLoss: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const HoldingsModel = mongoose.model("Holding", HoldingsSchema);

module.exports = { HoldingsModel };
