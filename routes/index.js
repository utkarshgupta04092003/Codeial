// This is router index.js file

const express = require('express');
const router = express.Router();

// import home controller from controllers
const homeController = require('../controllers/home_controller');

// handle '/'  request through home controller
router.get('/',homeController.home);

// route all user request to user controller
router.use('/users',require('./users'));

// route to post controllers
router.use('/posts',require('./posts'));

// route to comment controllers
router.use('/comments',require('./comments'));

console.log('Router loaded');



module.exports = router;