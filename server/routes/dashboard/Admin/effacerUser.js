const router=require('express').Router();
const user = require('../../../models/user');


router.get('deleteUser/:idUser', async (req, res)=>{
    const result = await  user.findById(idUser);
    console.log(result);
    if (user == admin){
        const resultat= await user.deleteOne({_id:idUser});
        res.send(resultat)

    } else {
        res.send('you are not administrator')
    }
})

module.exports=router;