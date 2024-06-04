const mysql = require("mysql2");
var con



//CREO UNA CONNESSIONE CON IL DATABASE
exports.dbConnection = function () {
    // Config  database credential
    con = mysql.createConnection({
      user: 'root',
      password: 'root',
      host: 'localhost',    //192.168.2.38
      port     : '3306',
      database: "test"
  });

  // Test connection
  return new Promise((resolve,reject)=>{
    con.connect(function(err) {
      if (err){
        console.log("problem: "+err)
        return reject(err)
      } 
      else {
        console.log("connected")
        return resolve()
      }
    });
  });
}

//Restituisce la percentuale di errori di un utente
exports.percErrori= function(user){
var query = "SELECT  avg(numero_errori/numeroDomande)*100 FROM svolgimento_quiz, quiz WHERE email='"+user+"' AND quiz.codQuiz = svolgimento_quiz.codQuiz;"
return new Promise((resolve,reject)=>{
  con.query(query, (err, records) => {
    if (err){
      console.log("problem: "+err)
      return reject(err)
    } 
    else {
      console.log("db percentuale call success")
      return resolve(records[0])
    }
    //console.log('Data fetched:', records);
  });
});

}

//Restituisce l'elenco dei quiz (GET QUIZ LIST)
exports.getQuizList= function(user){
  var query = "SELECT * FROM test.quiz;"
  return new Promise((resolve,reject)=>{
    con.query(query, (err, records) => {
      if (err){
        console.log("problem: "+err)
        return reject(err)
      } 
      else {
        console.log("db quizList call success")
        return resolve(records)
      }
      //console.log('Data fetched:', records);
    });
  });
}

//Restituisce il numero di quiz svolti da un utente (GET QUIZ COUNT)
exports.getQuizDone= function(email){
  var query = "SELECT count(*) as conteggio FROM svolgimento_quiz WHERE email='"+email+"'"
  return new Promise((resolve,reject)=>{
    con.query(query, (err, records) => {
      if (err){
        console.log("problem: "+err)
        return reject(err)
      } 
      else {
      console.log("db getQuizDone call success")
        return resolve(records)
      }
      //console.log('Data fetched:', records);
    });
  });
  }

  //Restituisce l'elenco delle domande di un quiz (GET DOMANDE)
  exports.getDomande= function(codQuiz){
    
    var query = "  SELECT * from domande WHERE codQuiz="+codQuiz+";"
    console.log(query)
    return new Promise((resolve,reject)=>{
      con.query(query, (err, records) => {
        if (err){
          console.log("problem: "+err)
          return reject(err)
        } 
        else {
          console.log("db getDomande call success")
          return resolve(records)
        }
        //console.log('Data fetched:', records);
      });
    });
    }




