const router=require('express').Router();

router.get('/home',(req,res)=>{
    res.send({message: 'welcome to home'});
})
module.exports = router;