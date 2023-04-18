const mongoose = require("mongoose");
const allowances = new mongoose.Schema({
      Allowances: [],
},
      {
            timestamps: true
      });


module.exports = mongoose.model("ALlowances", allowances);
