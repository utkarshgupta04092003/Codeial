const passport = require('passport');

const localStrategy = require('passport-local').Strategy;

const User = require('../models/user');


// tell passport to use passport-local

// authentication using passport
passport.use(new localStrategy({

    usernameField: 'email'
    },
    function(email,password,done){

        // find the user and establish the identity
        User.findOne({email:email},function(err,user){
            if(err){
                console.log('Error in findinguser --> passport');
                return done(err);
            }

            if(!user || user.password !=password){
                console.log('Invalid Username/Password');
                return done(null,false);
            }

            return done(null,user);
        })
    }
))



// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
})


// deserializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in finding user --> passport');
            return done(err);
        }

        return done(null,user);
    })
})


// check if user if authenticated
passport.checkAuthentication = function(req,res,next){

    // if user is signed in pass request to controller
    if(req.isAuthenticated()){
        return next();
    }
    // if user is not signed in
    return res.redirect('/users/sign-in');
}

// set authenticated user or not
passport.setAuthenticatedUser = function(req,res,next){
    
    if(req.isAuthenticated()){
        // req.user contains the current signed in user from session cookie and just sending this to locals for views
        res.locals.user = req.user;
    }

    next();
}




module.exports = passport;


