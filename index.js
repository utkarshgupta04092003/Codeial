const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const db = require('./config/mongoose');

const cookieParser = require('cookie-parser');


// import express ejs layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);


// use express routers
app.use('/',require('./routes'))

// set view engines
app.set('view engine','ejs');
app.set('views','./views');


// use middleware for cookie parser
app.use(express.urlencoded());
app.use(cookieParser());


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