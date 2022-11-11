// route for users
const express = require('express');
const router = express.Router();
const passport = require('passport');


const postsController = require('../controllers/posts_controller');

// create post
router.post('/create',passport.checkAuthentication,postsController.create);
// delete post and relative comments
router.get('/destroy/:id',passport.checkAuthentication,postsController.destroy);
// delete particular comment

module.exports = router;