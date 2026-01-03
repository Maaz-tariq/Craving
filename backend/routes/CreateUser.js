// const express = require('express')
// const router = express.Router();
// const user = require('../models/./User')


// router.post('/createuser', async(req,res)=>{
//     try {
//         await user.create({
//             name : "Maaz Tariq",
//             password : "123456",
//             email : "Maaz1234@gmail.com",
//             location : "Allahabad"
//         })
//         res.json({success : true})
//     } catch (error) {
//         console.log(error)
//         res.json({success : false})
//     }
// })

const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/createuser', async (req, res) => {
  try {
    await User.create({
      name: "Maaz Tariq",
      password: "123456",
      email: "Maaz1234@gmail.com",
      location: "Allahabad"
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
