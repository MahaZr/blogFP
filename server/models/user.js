const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name: String,
    lastname: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 }
});

const userModel = mongoose.model('git',user);

module.exports = userModel;
