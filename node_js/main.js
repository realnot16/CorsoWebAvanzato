const express = require('express')
var cors = require('cors')
const bodyParser = require("body-parser");

var dt = require('./db.js');

const app = express()
const port = 3000

dt.dbConnection()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors())


app.post("/",jsonParser, (req, res) => {
  console.log("Ricevuto una richiesta POST");
  // contenuto della richiesta
  console.log(req.body);
  // username
  console.log(req.body.user);
  // password
  console.log(req.body.pass);  
  res.send("hello world POST")
  
})

app.get('/', (req, res) => {

   res.send("HELLO WORLD")
})

 app.get('/errori', async (req, res) => {
  console.log( await dt.percErrori("poldi@gmail.com"))
  res.send("eseguo una query")
  
})

app.get('/getError', (req, res) => {
    res.send("errori nei quiz dato qualche cosa")
    
  })

app.get('/getDomande/:codquiz', async (req, res) => {
  var domande = await dt.getDomande(req.params.codquiz)
  console.log(domande)

  var data= {}

  console.log("STAMPA RISULTATI")
  data["domande"] = []
  for (var i=0; i< domande.length;i++){
    data["domande"][i] = {
      "id":domande[i].codDomanda,
      "domanda":domande[i].testoDomanda,
      "risposte": [domande[i].risposta1,domande[i].risposta2,domande[i].risposta3,domande[i].risposta4],
      "corretta": domande[i].rispostaCorretta
    }
  }
  
  res.json(data)
  })

  app.get('/', (req, res) => {
    res.send("hello world")
    
  })

  //API CALL PER OTTENERE LISTA DI QUIZ
app.get('/getQuizList', async (req, res)=> {
    var quizList = await dt.getQuizList()
    var data= []
    console.log("STAMPA RISULTATI")
    for (var i=0; i< quizList.length;i++){
      data.push( { "id": quizList[i].codQuiz, "numeroDomande" : quizList[i].numeroDomande , "tempoSvolgimento" : quizList[i].tempoSvolgimento})
    }
    console.log("variabile di tipo: "+typeof(data))
    console.log(data)
    res.json(data)
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})