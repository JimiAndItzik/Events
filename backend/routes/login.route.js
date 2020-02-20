const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();
//const config = require("config");
const { check, validationResult } = require("express-validator");
const User = require("../models/User.model");

// @route   POST api/user
// @desc    Register User , authenticate user and get json web token
// @access  Public
router.post(
  "/",
  [
    check("email", "Please Enter Your Email Address").isEmail(),
    check(
      "password",
      "Please enter valid password with 6 or more characters"
    ).exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req); //save all errors in array - then check if the array is empty
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password} = req.body;

    try {
      // check if user exist
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: [{ msg: "User NOT exists" }] });
      }
      
      const isPassMatch = await bcrypt.compare(password,user.password);
      if(!isPassMatch)
      {
        return res.status(400).json({ errors: [{ msg: "Invalid Password!" }] });
      }
     
      //return JSON WEB TOKEN
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        "myToken",
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token, role:user.role });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error:" + err);
    }
    // router.route('/').get((req, res) => {
    //     User.find()
    //         .then(users => res.json(users))
    //         .catch(err => res.status(400).json('Error: ' + err));
    //   });
  }
);

module.exports = router;