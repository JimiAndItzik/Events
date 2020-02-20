const express = require("express");
const router = express.Router();
require('dotenv').config();

const { check, validationResult } = require("express-validator");
const Company = require("../models/Company.model");

// @route   POST companies
// @desc    Create Company
// @access  Public
router.post(
  "/",
  [
    check("companyName", "Company Name Is Required!") // from documentation - check each paramter from User model if its valid
      .not()
      .isEmpty(),   
  ],

  async (req, res) => {
    const errors = validationResult(req); //save all errors in array - then check if the array is empty
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {companyName} = req.body;

    try {
      // check if user exist
      let company = await Company.findOne({ companyName });
      if (company) {
        res.status(400).json({ errors: [{ msg: "Company already exists" }] });
      }
      
      // define new company
      company = new Company({ companyName });
      await company.save()
      .then(() => res.json('Company Added Successfully'));

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error:" + err);
    }
  }
);

module.exports = router;