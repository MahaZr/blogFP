const router=require('express').Router();
const user = require('../models/user');


router.post('/login', async (req,res)=>{

    const result = await  user.findOne({ "email": req.body.email }).exec()
    if(result!= null ){
    if (result.password === req.body.password) {
        res.send(result);
    } else {
        res.status(200).send('bad pass');
    }
}
else {
    res.status(200).send('you are not registred, please inscribe to our site');
}
})
module.exports = router;
