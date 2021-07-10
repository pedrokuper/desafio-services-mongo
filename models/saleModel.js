const mongoose = require("mongoose");

const salesSchema = mongoose.Schema({
  prodcut: {
    type: Object,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date("<YYYY-mm-ddTHH:MM:ss>"),
    required: true,
  },
});

module.exports = mongoose.model("Sale", salesSchema);
