
//Importo tutti i moduli necessari per l'utilizzo delle API
const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser"); //---------------JSON PARSER

//Importo il modulo che contiene le chiamate al database
const dt = require('./db.js');

//Dichiaro la porta che utilizzerò per le API 
const app = express()
const port = 3001

//Mi connetto al database
dt.dbConnection()

var jsonParser = bodyParser.json()      //---------------JSON PARSER

//Serve ad evitare problemi con la cors policy
app.use(cors())


//Di seguito le API realizzate

//Restituisce il numero di quiz svolti dall'utente
//Un esempio di API POST
app.post("/getQuizDone",jsonParser, async (req, res) => {  
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

//Restituisce il l'elenco dei quiz svolti dall'utente
//Un esempio di API POST
app.post("/getListQuizDone",jsonParser, async (req, res) => {  
  console.log("Ricevuto una richiesta POST per getListQuizDone");
  // contenuto della richiesta
  console.log(req.body);
  // email
  console.log(req.body.email);

  var result = await dt.getListQuizDone(req.body.email) 
  console.log("result ---")
  console.log(result)
  res.json(result)
})

//chiamata API POST. Riceve i risultati dei quiz e li memorizza nel database
app.post("/insertQuizResult",jsonParser, async (req, res) => {  
  console.log("Ricevuto una richiesta POST per insertQuizResult");

  // email
  console.log(req.body.email);
  console.log(req.body.codQuiz);
  console.log(req.body.errori);

  dt.insertQuizResult(req.body.email,req.body.codQuiz,req.body.errori)

  // var result = await dt.getQuizDone(req.body.email) 
  // console.log("result ---")
  // console.log(result)
  // res.json(result)
})


//Restituisce la percentuale di errori realizzata da un utente
 app.get('/errori:utente', async (req, res) => {
  data =  await dt.percErrori(req.params.utente)
  console.log( data)
  res.json(data)
  
})

//Restituisce il numero di quiz con 3 errori
app.get('/quiz3errori', async (req, res) => {
  data =  await dt.nErrori()
  console.log( data)
  res.send(data)
})


//Restituisce l'elenco delle domande dato un id del quiz
app.get('/getDomande/:codquiz', async (req, res) => {
  var domande = await dt.getDomande(req.params.codquiz)
  console.log(domande)

  //Dopo aver letto le domande dal database, formatto il risultato in maniera tale 
  //                                              che react possa utilizzarlo correttamente
  var data= {}
  console.log("formattazione getDomande:------------------")
  data["domande"] = []
  for (var i=0; i< domande.length;i++){
    data["domande"].push({
      "id":i,
      "domanda":domande[i].testoDomanda,
      "risposte": [domande[i].risposta1,domande[i].risposta2,domande[i].risposta3,domande[i].risposta4],
      "corretta": domande[i].rispostaCorretta
    })
  }
  console.log(data)
  res.json(data)
  })


//Restituisce l'elenco dei quiz disponibili
app.get('/getQuizList', async (req, res)=> {
  var listaQuiz = await dt.getQuizList()
  console.log(listaQuiz)

  res.json(listaQuiz)
})

//Lancio il server sulla porta specificata
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})