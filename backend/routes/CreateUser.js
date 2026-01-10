// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// router.post('/createuser', async (req, res) => {
//   try {
//     await User.create({
//       name: req.body.name,
//       password: req.body.password,
//       email: req.body.email,
//       location: req.body.geolocation
//     });

//     res.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false });
//   }
// });


const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/createuser', async (req, res) => {
  try {
    const { name, email, password, geolocation } = req.body;

    if (!name || !email || !password || !geolocation) {
      return res.status(400).json({
        success: false,
        error: "All fields are required"
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: "Email already registered"
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
      name,
      email,
      password: hashedPassword,
      location: geolocation
    });


    res.status(201).json({
      success: true,
      message: "User created successfully"
    });

  } catch (error) {
    console.error("Create User Error:", error);
    res.status(500).json({
      success: false,
      error: "Server error"
    });
  }
});


router.post('/loginuser', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: "Email and password are required"
      });
    }

    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(401).json({
        success: false,
        error: "Invalid credentials"
      });
    }

    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: "Invalid credentials"
      });
    }

    const data = {
      user: {
        id: userData.id
      }
    };

    const token = jwt.sign(
      data,
      process.env.JWT_SECRET || "mySuperSecretKey",
      { expiresIn: "1h" }
    );


    res.json({
      success: true,
      token
    });

    
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      success: false,
      error: "Server error"
    });
  }
});

 

module.exports = router;
    