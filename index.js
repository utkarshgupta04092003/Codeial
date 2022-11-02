const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const db = require('./config/mongoose');

const cookieParser = require('cookie-parser');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

// import connect mongo
// const MongoStore = require('connect-mongo')(session);



// import express ejs layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);


// use middleware for cookie parser
app.use(express.urlencoded());
app.use(cookieParser());


// set view engines
app.set('view engine','ejs');
app.set('views','./views');

// session middleware
app.use(session({
    name: 'Codeial',
    // todo change the secret befre deployment in production mode
    secret: "blahsomething",
    saveUninitialized: false,
    resave: false,
    cookie :{
        maxAge: (100*60*100)
    },
    // store: new MongoStore({
        
    //     mongooseConnection: db,
    //     autoRemove: 'disabled'
        
    // },
    // function(err){
    //     console.log(err|| 'Connect-mongo db setup ok');
    // }) 

}));


//passport session middleware
app.use(passport.initialize());
app.use(passport.session());

// for each request set user is authenticate or not
app.use(passport.setAuthenticatedUser);


// use express routers
app.use('/',require('./routes'))




// use asserts for static files 
app.use(express.static('./asserts'));


// extract link and put in head of layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



// server listen on given port
app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
        return;
    }
    console.log('server is running on port',port);

})