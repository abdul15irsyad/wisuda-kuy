const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

const port = process.env.PORT || 8080

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/',(req,res)=>{
  // res.render('index')
  res.sendFile(path.join(__dirname+'/views/index.html'))
})

app.listen(port,()=>console.log(`server running on http://localhost:${port}`))