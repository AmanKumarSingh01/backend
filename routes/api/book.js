const express = require('express');;
const router = express.Router();
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
//Load user model

const Book = require('./../../models/Book');

router.get('/test',(req, res) => {
    res.json({"msg":"User Works!!"});
});

router.post('/addbook', (req , res) => {
    if(req.body.id==='adminlove'&& req.body.password==='amanISgreat'){
        Book.findOne({title : req.body.title , author : req.body.author})
            .then((book)=>{
                    Book.update({_id : book.id} , {
                        $push :{
                            sellers :{
                                name : req.body.sellername,
                                email : req.body.selleremail,
                                mobile : req.body.sellermobile,
                                quantity : req.body.sellerquantity,
                            }
                        }
                    })
                    .then((alns)=>{
                        res.status(200).json(alns);
                    })
                    .catch(err=>{
                        throw err;
                    })
                    
                })
                
            
        
            .catch(()=>{
                const sellers =[];
                sellers.name = req.body.sellername;
                sellers.email = req.body.selleremail;
                sellers.mobile = req.body.sellermobile;
                sellers.quantity = req.body.sellerquantity;
                const book = new Book ({
                    title : req.body.title,
                    author : req.body.author,
                    price  : req.body.price ,
                    quantity : req.body.quantity,
                    edition : req.body.edition,
                    sellers : [sellers]

                })
                book.save()
                    .then((book)=>{
                        res.status(200).json(book);
                    })
                    .catch(err=>{
                        res.status(400).json(err);
                    })
            })
    }
})


router.post('/find' , (req , res)=>{
    Book.find({
        title :{
            $regex : new RegExp(req.body.title)
        },
        author :{
            $regex : new RegExp(req.body.author)
        }
    })
        .then(book=>{
            if(!book){
                res.status(200).json({'msg' :'book not found'})
            }
            res.status(200).json(book)
        })
})

router.post('/findbyid/:id' , (req , res)=>{
    Book.find({_id : req.params.id})
        .then(book=>{
            if(!book){
                res.status(200).json({'msg' :'book not found'})
            }
            res.status(200).json(book)
        })
})





module.exports= router;