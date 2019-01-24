const router=require('express').Router();
const article=require('../../models/article');


router.get('/consulterArt/:idArt', async (req,res)=>{
    try {
        const resultat=await article.findById(req.params.idArt).exec();
        res.send(resultat);
    } catch (error) {
        res.send('Identificateur de article est non valide, veuillez saisir un autre identifiant');
    }
    
})

module.exports=router;