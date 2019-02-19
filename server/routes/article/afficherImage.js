const router = require('express').Router();
const article=require('../../models/article');
var path = require('path');
router.get('/viewImg/:nameImg', (req,res) => {
    console.log(req.params.nameImg);
     res.sendFile(req.params.nameImg , {root: path.join('./server/upload','/')});
})


module.exports=router;

