// route for users
const express = require('express');
const router = express.Router();
const passport = require('passport');


const commentsController = require('../controllers/comments_controller');

// create comment
router.post('/create',passport.checkAuthentication,commentsController.create);

// delete comment
router.get('/destroy/:id',passport.checkAuthentication,commentsController.destroy);


module.exports = router;