const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser')
const user = require('./routes/api/user')
const book = require('./routes/api/book')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Db congig

const db = require('./config/keys').mongoURI;

//connect to database

mongoose
    .connect(db , {useNewUrlParser:true , useUnifiedTopology:true ,useFindAndModify : true})   
    .then(()=>{
        console.log("Connected to database");
    })
    .catch( err =>{
        console.log(err);
}) ;


app.use(passport.initialize())
//Passport Config
require('./config/passport')(passport);





//use routes
app.use('/api/book' , book);
app.use('/api/user' , user);

const port = process.env.PORT ||5000;   

app.listen(port , ()=>{
    console.log(`server is listening at ${port}`);
});