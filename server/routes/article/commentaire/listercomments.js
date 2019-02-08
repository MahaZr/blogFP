const router=require('express').Router();
const comments = require('../../../models/comment');
const verifyToken = require('../../jwt').verifyToken;


router.get('/listercomment/:idArt',verifyToken, async (req,res)=>{
 var results = await comments.find({ IDArticle : req.params.idArt}).exec();
 res.send(results);
});
module.exports = router;