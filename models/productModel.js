const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  stockQty: {
    type: Number,
    required: true,
  },
  shipping: {
    type: String,
    enum: ["paid", "free"],
    default: "paid",
  },
});

module.exports = mongoose.model("Product", productSchema);
