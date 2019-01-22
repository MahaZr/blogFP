const router = require('express').Router();
const article=require('../../models/article');

router.post('article/createArt', async (req,res)=>{
     var art=req.body;
     article.collection.insertOne(art,(err,result)=>{
         if(err) throw err;
         result=article.collection.find().exec();
     })
    res.send(result);
})

module.exports=router;