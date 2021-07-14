const mongoose = require("mongoose");

const salesSchema = mongoose.Schema({
  product: {
    type: Object,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Sale", salesSchema);
