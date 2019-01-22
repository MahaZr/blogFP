const mongoose=require('mongoose');

const article=new mongoose.Schema({
    titre : String,
    date :Date,
    image :String,
    auteur : String,
    contenu :String,
    compteur : Number
});
const userModel = mongoose.model('git',article);

module.exports = userModel;