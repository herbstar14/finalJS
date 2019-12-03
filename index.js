
const express = require('express')
const app = express();
const bodyParser = require('body-parser') 
const ejs = require('ejs')
//they added a lot of stuff in this index file 
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const mongoose = require('mongoose')
const connectDB = require('./modules/connectMongoDB')
connectDB();

//they are fileStore and session

app.use(session({
    secret: "andrew",//security key
    resave: false,
    saveUninitialized: false,
    store: FileStore(),


}))


app.use(express.static('public'))
app.set('views' , __dirname + '/views')
app.set('view engine' , 'ejs')
app.engine('html' , ejs.renderFile)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const router = require('./router/router')(app)

app.listen(3000,function(){

    console.log('listening on port 3000')
})





