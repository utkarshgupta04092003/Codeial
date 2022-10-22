// route for users
const express = require('express');
const router = express.Router();

// import user controller 
const usersController = require('../controllers/users_controller');


// handle all user request
router.get('/profile',usersController.profile);
router.get('/post',usersController.post);





module.exports = router;