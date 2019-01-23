const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name: String,
    lastname: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 },
    admin: {type: Boolean, default: false }
});

const userModel = mongoose.model('users',user);

module.exports = userModel;
