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
const ajouterComment = require('./server/routes/article/commentaire/ajouterComment')
const deleteComment = require('./server/routes/article/commentaire/deleteComment')
const listerComment = require('./server/routes/article/commentaire/listercomments')
const updateComment = require('./server/routes/article/commentaire/updateComment')
const ajouterArt = require('./server/routes/article/ajouterArt')
const consulterArt = require('./server/routes/article/consulterArt')
const listerArticles = require ('./server/routes/article/listerArticles')
const suprimerArt = require ('./server/routes/article/suprimerArt')
const updateArt = require ('./server/routes/article/updateArt')

app.use('/auth',login )
app.use('/home',home)
app.use('/article',ajouterArt)
app.use('/register',register)
app.use('/article',ajouterComment)
app.use('/article',updateArt)
app.use('/article',suprimerArt)
app.use('/article',listerArticles)
app.use('/admin',ajouterAdmin)
<<<<<<< HEAD
app.use('/article',consulterArt)
=======
app.use('/User',effacerUser)
app.use('/article',updateComment)
app.use('/article',deleteComment)
app.use('/article',listerComment)
>>>>>>> 373b82dd45ff27e1a539e9120e7e77131a6b8eb4



app.listen(3001, (err)=>{
    if(err)throw err;
    console.log('server is running on port 3001')
})