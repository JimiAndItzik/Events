const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true // must to fill
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // make sure no duplicate email
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String
  }
});
module.exports = User = mongoose.model("user", UserSchema);