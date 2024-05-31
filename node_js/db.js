const mysql = require("mysql2");
var con


exports.dbConnection = function () {
    // Config  database credential
    con = mysql.createConnection({
      user: 'root',
      password: 'root',
      host: 'localhost',
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

//GET percentuale errori dato un utente
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

//GET QUIZ LIST
exports.getQuizList= function(user){
  var query = "SELECT * FROM test.quiz;"
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

//GET QUIZ DONE BY ONE USER
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

  //GET ELENCO DOMANDE
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
          console.log("db percentuale call success")
          return resolve(records)
        }
        //console.log('Data fetched:', records);
      });
    });
    }



//GET BUILDING INFO
exports.getBuilding = function (level,name){
  var query ="select * from Buildings WHERE Level="+level+" and Name='"+name+"';"
  return new Promise((resolve,reject)=>{
    con.query(query, (err, records) => {
      if (err){
        console.log("problem: "+err)
        return reject(err)
      } 
      else {
        console.log("db building call success")
        return resolve(records[0])
      }
      //console.log('Data fetched:', records);
    });
  });
}

//GET TROOP INFO
exports.getTroop = function (name){
  var query ="select * from Unit WHERE Name='"+name+"';"
  return new Promise((resolve,reject)=>{
    con.query(query, (err, records) => {
      if (err){
        console.log("problem: "+err)
        return reject(err)
      } 
      else {
        console.log("db troop call success")
        return resolve(records[0])
      }
      //console.log('Data fetched:', records);
    });
  });
}



exports.dbData = function () {
    var query ='select * from Buildings'
      // Query to the database and get the records
    
    return new Promise((resolve,reject)=>{
      con.query(query, (err, records) => {
        if (err){
          console.log("problem: "+err)
          return reject(err)
        } 
        else {
          console.log("made this far "+ records)
          return resolve(records[0].hexcode)
        }
        //console.log('Data fetched:', records);
      });
    });

}
