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
exports.nErrori= function(){
var query = "SELECT  count(codSvolgimento) as count FROM svolgimento_quiz  WHERE numero_errori=3"
return new Promise((resolve,reject)=>{
  con.query(query, (err, records) => {
    if (err){
      console.log("problem: "+err)
      return reject(err)
    } 
    else {
      console.log("db percentuale call success")
      return resolve(records)
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

//inserisce i risultati di un quiz nel database
exports.insertQuizResult= function(email,codQuiz,errori){
  var query = "INSERT INTO svolgimento_quiz(email,codQuiz, numero_errori) VALUES ('"+email+"',"+codQuiz+","+errori+")"
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

//Restituisce l'elenco dei quiz svolti da un utente (GET QUIZ DONE)
exports.getListQuizDone= function(email){
  var query = "SELECT codQuiz FROM test.svolgimento_quiz WHERE email='"+email+"';"
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




