// route for users
const express = require('express');
const router = express.Router();
const passport = require('passport');
// import user controller 
const usersController = require('../controllers/users_controller');


// handle all user request
router.get('/profile',passport.checkAuthentication,usersController.profile);
router.get('/post',usersController.post);


// sign in and signup router

router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

// create user through signup page
router.post('/create',usersController.create);

// create session
// first authenticate using passport and then go for createsession controller
router.post('/create-session',passport.authenticate('local',
    {
        failureRedirect: '/useres/sign-in',
    }
),usersController.createSession);




module.exports = router;