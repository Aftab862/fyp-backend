const mongoose = require("mongoose");
const salariesRecord = new mongoose.Schema({
  Date: { type: String },
  Data: [],
  TotalIncome: { type: Number }
}, {
  timestamps: true
});


module.exports = mongoose.model("Salaries", salariesRecord);
