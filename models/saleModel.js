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
  },
});

module.exports = mongoose.model("Sale", salesSchema);
