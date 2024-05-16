const express = require('express')

var dt = require('./db.js');

const app = express()
const port = 3000

dt.dbConnection()

app.get('/', (req, res) => {
    
  res.send("hello world")
  
})

 app.get('/errori', async (req, res) => {
  console.log( await dt.percErrori("poldi@gmail.com"))
  res.send("eseguo una query")
  
})

app.get('/getError', (req, res) => {
    res.send("errori nei quiz dato qualche cosa")
    
  })


  app.get('/', (req, res) => {
    res.send("hello world")
    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})