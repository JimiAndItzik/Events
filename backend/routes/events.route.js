const express = require("express");
const router = express.Router();
require('dotenv').config();

const { check, validationResult } = require("express-validator");
const Event = require("../models/Event.model");

// @route   POST companies
// @desc    Create Company
// @access  Public
router.post(
  "/",
  [
    check("date", "Date Is Required!") // from documentation - check each paramter from User model if its valid
      .not()
      .isEmpty(),   
      check("companyName", "Company Name Is Required!") // from documentation - check each paramter from User model if its valid
      .not()
      .isEmpty(), 
      check("owners", "Owners Is Required!") // from documentation - check each paramter from User model if its valid
      .not()
      .isEmpty(), 
      check("location", "Location Is Required!") // from documentation - check each paramter from User model if its valid
      .not()
      .isEmpty(), 
  ],

  async (req, res) => {
    const errors = validationResult(req); //save all errors in array - then check if the array is empty
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {date, companyName, owners, location} = req.body;

    try {
      // check if event exist
      let event = await Event.findOne({ date, companyName, owners, location});
      if (event) {
        res.status(400).json({ errors: [{ msg: "Event already exists" }] });
      }
      
      // define new event
      event = new Event({ date, companyName, owners, location });
      await event.save()
      .then(() => res.json('Event Added Successfully'));

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error:" + err);
    }
  }
);

module.exports = router;