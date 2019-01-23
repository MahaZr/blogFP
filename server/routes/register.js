const router=require('express').Router();
const Users = require('../models/user');
const mongoose = require('mongoose')


/*const user = new mongoose.Schema ({

    firstname: String,
    lastname: String,
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true }
});

const userModel = mongoose.model('users', user);*/


router.post('/register',function (req,res)  {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var password = req.body.password;

    var newuser = new Users();
    newuser.firstname = firstname;
    newuser.lastname = lastname;
    newuser.email = email;
    newuser.password = password;
    newuser.save(function(err, savedUser){
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        else{

        return res.status(200).send('you have successufuly subscribed to our site');
    } });
   
})

module.exports = router;