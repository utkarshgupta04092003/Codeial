const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

// import express ejs layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);


// use express routers
app.use('/',require('./routes'))

// set view engines
app.set('view engine','ejs');
app.set('views','./views');



app.use(express.static('./asserts'));



// server listen on given port
app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
        return;
    }
    console.log('server is running on port',port);

})