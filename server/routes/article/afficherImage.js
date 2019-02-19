const router = require('express').Router();
const article=require('../../models/article');

router.get('/viewImg/:nameImg', async (req,res) => {
    console.log(req.params.nameImg);
   try {
    console.log(req.params.nameImg);
    const result =await article.find({image:req.params.nameImg}).exec();
    console.log(result);
     res.send(result);
   } catch (error) {
       res.send({message:'verifier le nom de image'});
   } 
})

module.exports=router;

