const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema

const Bookschema = new Schema({
    title : {
        required: true,
        type: String
    },
    author :{
        required :true,
        type :String
    },
    img: {
        data : Buffer,
        contentType : String,
    },
    price :{
        required :true ,
        type : Number
    },
    quantity :{
        required : true ,
        type :Number
    },
    sellers :[
        {
            name : {
                type : String,
                required :true
            },
            email :{
                type : String,
                required: true
            },
            mobile :{
                type : String ,
                required :true
            },
            quantity :{
                type:Number,
                required:true
            }
        }
    ]
})


module.exports=Book =mongoose.model('books' , Bookschema);