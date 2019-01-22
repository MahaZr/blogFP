const router=require('express').Router();


router.post('/login', async (req,res)=>{

    const result = await User.findOne({ email: req.body.email }).exec()
    if(result )
    if (result.password === req.body.password) {
        res.send(result);
    } else {
        res.send('bad pass')
    }
})
module.exports = router;
