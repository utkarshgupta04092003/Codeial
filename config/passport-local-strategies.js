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



// sertializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
})


// desertializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in finding user --> passport');
            return done(err);
        }

        return done(null,user);
    })
})

module.exports = passport;


