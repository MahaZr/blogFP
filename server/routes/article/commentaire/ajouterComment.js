const router=require('express').Router();
const Comment = require('../../../models/comment');

router.post('/ajoutComment/:idUser/:idArt', async (req,res)=>{

var  newcoment = new Comment();
newcoment.IdUser = req.params.idUser;
newcoment.IDArticle = req.params.idArt;
newcoment.corps = req.body.corps;

newcoment.save(function(err, savedUser){
    if (err) {
        console.log(err);
        return res.status(500).send();
    }
    else{

    return res.status(200).send('you have successufuly add a new comment');
} });     
})
module.exports = router ;