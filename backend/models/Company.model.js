//import user from "./User.model";
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    companyName: {
      type: String,
      required: true,
      unique: true
    },
    employees: {
       type: Array,
    },
    phone: {
      type: String
    }
  });
module.exports = Company = mongoose.model("company", companySchema);
