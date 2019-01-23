const router=require('express').Router();


router.post('/login', async (req,res)=>{

    const result = await User.findOne({ email: req.body.email }).exec()
    if(result!= null ){
    if (result.password === req.body.password) {
        res.send(result);
    } else {
        res.send('bad pass');
    }
}
else {
    res.send('you are not registred, please inscribe to our site');
}
})
module.exports = router;
