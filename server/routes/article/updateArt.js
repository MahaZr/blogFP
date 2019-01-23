
const router = require('express').Router();

router.post('/updateArt/:idUser/:idArt', async (req,res)=>{
    var idArt=req.params.idArt;
    var idUser=req.params.idUser;
    const resultat=await article.updateOne()
    res.send()
})
module.exports = router;