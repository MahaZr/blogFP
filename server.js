const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
mongoose.connect('mongodb://localhost:27017/blogDb')
const app = express()

app.use(bodyparser.json())

const auth = require('./server/routes/auth')
app.use('/auth', auth)

app.listen(3001, (err)=>{
    if(err)throw err;
    console.log('server is running on port 3000')
})