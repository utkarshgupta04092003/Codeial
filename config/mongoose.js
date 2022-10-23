// import mongoose
const mongoose = require('mongoose');

// connecting to database
mongoose.connect('mongodb://localhost/codeial_development');

// fetch connection type
const db = mongoose.connection;


// if error, execute this
db.on('error',console.error.bind(console,'Error connecting to Database: Mongoose'));


// if connected successfully execute this
db.once('open',function(){
    console.log('Connected to DataBase: Mongoose');
})


module.exports = db;

