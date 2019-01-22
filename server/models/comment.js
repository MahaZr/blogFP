const mongoose=require('mongoose');

const commentaire=new mongoose.Schema({
    IdUser : Number,
    IDArticle : Number,
    date:Date,
    corps:String
    
});
const userModel = mongoose.model('git',comment);

module.exports = userModel;