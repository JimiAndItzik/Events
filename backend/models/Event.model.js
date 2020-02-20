const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  owners: {
    type: Array,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});
module.exports = Event = mongoose.model("event", eventSchema);