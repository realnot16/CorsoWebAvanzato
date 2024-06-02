const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser"); //---------------JSON PARSER

var dt = require('./db.js');

const app = express()
const port = 3001

dt.dbConnection()

var jsonParser = bodyParser.json()      //---------------JSON PARSER
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors())

//Restituisce il numero di quiz svolti dall'utente
app.post("/getQuizDone",jsonParser, async (req, res) => {     //---------------JSON PARSER
  console.log("Ricevuto una richiesta POST per getQuizDone");
  // contenuto della richiesta
  console.log(req.body);
  // email
  console.log(req.body.email);

  var result = await dt.getQuizDone(req.body.email) 
  console.log("result ---")
  console.log(result)
  res.json(result)
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
    data["domande"].push({
      "id":domande[i].codDomanda,
      "domanda":domande[i].testoDomanda,
      "risposte": [domande[i].risposta1,domande[i].risposta2,domande[i].risposta3,domande[i].risposta4],
      "corretta": domande[i].rispostaCorretta
    })
  }
  console.log("risultato chiama getDomande")
  console.log(data)
  res.json(data)
  })

  app.get('/', (req, res) => {
    res.send("hello world")
    
  })

  //API CALL PER OTTENERE LISTA DI QUIZ
app.get('/getQuizList', async (req, res)=> {
  var listaQuiz = await dt.getQuizList()
  console.log(listaQuiz)

  res.json(listaQuiz)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})