const router = require('express').Router();
const user = require('../../../models/user');


router.get('/ajoutAdmin/:idUser', async (req,res)=>{
    const result = await  user.findById(req.params.idUser);
    console.log(result);
    if(result){
    
        const resu = await user.where({_id: req.params.idUser }).updateOne({$set: {admin: true}});
        res.send(resu);
    } else {
        res.send('user not registred');
    }
})

module.exports = router;