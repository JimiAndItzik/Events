const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI;
const connectDB = async () => {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      });
      console.log("MongoDB connection established successfully");
    } catch (err) {
      console.log('MongoDB connection error:' +err);
      process.exit(1);
    }
  };
  module.exports = connectDB;
  