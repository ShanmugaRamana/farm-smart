const mongoose = require("mongoose");

const cropPriceSchema = new mongoose.Schema({
  cropName: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  dateUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CropPrice", cropPriceSchema);
