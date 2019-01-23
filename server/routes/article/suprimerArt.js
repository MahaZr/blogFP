const router = require('express').Router();
const article=require('../../models/article');
const user=require('../../models/user');

router.get('/deleteArt/:idUser/:idArt', async (req,res)=>{
    const idUser=req.params.idUser;
    const idArt=req.params.idArt;
    const art=await article.findById(idArt).exec();
    const use=await user.findById(idUser).exec();
    if((art.auteur==use.name)||(use.admin)){
        const resultat= await article.deleteOne({_id:idArt});
        res.send(resultat);
    }else{
    res.send('5atiiiiiiiiik');
    }
})

module.exports=router;