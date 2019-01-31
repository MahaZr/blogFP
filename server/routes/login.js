const router=require('express').Router();
const user = require('../models/user');
const jwt = require('jsonwebtoken').authenticate;


router.post('/login', async (req,res)=>{

    const result = await  user.findOne({ "email": req.body.email }).exec()
    if(result!= null ){
       
        
    if (result.password === req.body.password) {
        jwt.sign({user : result}, 'secretKey',(err,token)=>{
            res.send({token : token});
        });

    } else {

        res.status(200).send('bad pass');
    }
}
else {
    res.status(200).send('you are not registred, please inscribe to our site');
}
})
module.exports = router;
