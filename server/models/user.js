const mongoose = require('mongoose');
const bcrypt=require('bcrypt-nodejs')

const user = new mongoose.Schema({
    name: String,
    lastname: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 },
    admin: {type: Boolean, default: false }
});

user.methods.generatehash=function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(9));
}

user.methods.validPassxord=function(password){
    return bcrypt.compareSync(password,this.password);
    
}



const userModel = mongoose.model('users',user);

module.exports = userModel;
