const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
mongoose.connect('mongodb://localhost:27017/blogDb',{ useNewUrlParser: true })
const app = express()

app.use(bodyparser.json())

const auth = require('./server/routes/auth')
const home=require('./server/routes/home')
const login=require('./server/routes/login')
const register=require('./server/routes/register')
const ajouterAdmin=require('./server/routes/dashboard/Admin/ajouterAdmin')
const effacerUser=require('./server/routes/dashboard/Admin/effacerUser')
const listerUser=require('./server/routes/dashboard/Admin/listerUser')
app.use('/auth', auth)
app.use('/home',home)

app.listen(3001, (err)=>{
    if(err)throw err;
    console.log('server is running on port 3001')
})