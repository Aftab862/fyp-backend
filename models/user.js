const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 6 },
  name: { type: String, required: false },
  role: { type: String, required: true },
}, {
  timestamps: true
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("users", userSchema);
