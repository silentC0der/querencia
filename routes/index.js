const express = require('express');
const router = express.Router();
const path = require('path');

// *********************** routes user API **********************************//
var userObj = require('../controllers/user.js');
 //router.get('/user', userObj.getUserList); //version
router.post('/user',userObj.addUser);   





module.exports = router;