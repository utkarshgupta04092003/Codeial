// route for users
const express = require('express');
const router = express.Router();
const passport = require('passport');
// import user controller 
const usersController = require('../controllers/users_controller');

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

// sign out or destroy session
router.get('/sign-out',usersController.destroySession);




// handle all user request
router.get('/profile/:id',passport.checkAuthentication,usersController.profile);

// update user profile route
router.post('/update/:id',passport.checkAuthentication,usersController.update);









module.exports = router;