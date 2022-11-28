const express = require('express')
const app = express()
const email = require('./routes/email')

require('dotenv/config')

app.use(express.static(__dirname + '/public'))
app.set("view engine", "ejs");
app.use('/', email)
app.get('/', (req, res)=>{
    res.render('home portfolio')
})

app.get('/about', (req, res)=>{
    res.render('about us portfolio')
})

app.get('/services', (req, res)=>{
    res.render('services')
})

app.get('/contact', (req, res)=>{
    res.render('contact us portfolio')
})

app.get('/profile', (req,res)=>{
    res.render('my profile')
})
const Port = process.env.PORT || 3008
app.listen(Port, ()=>{
    console.log(`${Port}`)
})