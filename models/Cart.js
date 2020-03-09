const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema

const Userschema = new Schema({
    name : {
        required: true,
        type: String
    },
    email :{
        type :String,
        required: true
    },
    avatar :{
        type : String,
    },
    password :{
        type : String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    adress:{
        type: String,
    }
})


module.exports=User =mongoose.model('users' , Userschema);