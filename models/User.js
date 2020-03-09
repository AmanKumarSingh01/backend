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
    },
    cart : [
        {
            bookid :{
                type : String
            },
            booktitle : {
                type : String
            },
            author :{
                type:String
            },
            price :{
                type : String
            },
            sellername : {
                type : String,
                required :true
            },
            selleremail :{
                type : String,
                required: true
            },
            sellermobile :{
                type : String ,
            },
            quantity :{
                type:Number,
            }
        }
    ],
    purchase :[
        {
            booktitle : {
                type : String
            },
            Price :{
                type : String
            },
            sellername : {
                type : String,
                required :true
            },
            selleremail :{
                type : String,
                required: true
            },
            sellermobile :{
                type : String ,
                required :true
            },
            sellerquantity :{
                type:Number,
                required:true
            }
        }
    ]
})


module.exports=User =mongoose.model('users' , Userschema);