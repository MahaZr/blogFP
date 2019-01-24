const router=require('express').Router();
const comments = require('../../../models/comment');


router.get('/listercomment/:idArt', async (req,res)=>{
 var results = await comments.find({ IDArticle : req.params.idArt}).exec();
 res.send(results);
});
module.exports = router;