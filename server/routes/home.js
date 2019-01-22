const router=require('express').Router();
const article = require('../models/article');

router.get('/home/:auth',async (req,res)=>{
    if(req.params.auth=='all') {
    const result= await article.find().exec()
    res.send(result);
    } else{
        const result= await article.find({auteur:req.params.auth}).exec()
        res.send(result);  
    }
})
module.exports = router;
