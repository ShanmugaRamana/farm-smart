const mongoose = require("mongoose");

const subsidySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  eligibility: { type: String },
  amount: { type: Number, required: true },
  governmentAgency: { type: String },
  applicationDeadline: { type: Date },
});

module.exports = mongoose.model("Subsidy", subsidySchema);
