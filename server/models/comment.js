const mongoose=require('mongoose');

const commentaire=new mongoose.Schema({
    IdUser : Number,
    IDArticle : Number,
    date:{type: Date, default:Date.now()},
    corps:String
    
});
const commentModel = mongoose.model('comments',commentaire);

module.exports = commentModel;