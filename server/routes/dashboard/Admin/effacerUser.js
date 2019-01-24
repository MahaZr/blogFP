const router=require('express').Router();
const user = require('../../../models/user');


router.get('/deleteUser/:idadmin/:idUser', async (req, res)=>{
    const utilisateuradmin = await  user.findById(req.params.idadmin);
    const utilisateur = await  user.findById(req.params.idUser);
    console.log(utilisateuradmin,utilisateur);
    if (utilisateuradmin.admin&&(!utilisateur.admin)){
        const resultat= await user.deleteOne({_id : req.params.idUser});
        res.send(resultat)

    } else {
        res.send('you are not administrator')
    }
})

module.exports=router; 