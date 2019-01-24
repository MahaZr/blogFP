

const router = require('express').Router();
const Users = require('../../../models/user');


router.get('/listerUser/:idUser', async (req, res) => {
    try {
        var utilisateur = await Users.findById(req.params.idUser);
    } catch (error) {
        res.send(' bad id user');
    }




    if (utilisateur.admin) {

        User = await Users.find().exec();
       //console.log(User);
        res.send(User);


    } else {
        res.send('you are not admin');
    }
})

module.exports = router ;