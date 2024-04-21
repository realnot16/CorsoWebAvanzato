var array = [   {
                    nome:"0",
                    domanda: "chi ha scoperto l'america",
                    r1: "magellano",
                    r2: "colombo",
                    r3: "Vespucci",
                    corretta: "colombo"
                },
                {
                    nome:"1",
                    domanda: "sdfsdf",
                    r1: "sdfsdf",
                    r2: "sdfs",
                    r3: "dsffsd",
                    corretta: "dsf"
                },
                {
                    nome:"2",
                    domanda: "",
                    r1: "",
                    r2: "",
                    r3: "",
                    corretta: ""
                },
                {   
                    nome:"3",
                    domanda: "",
                    r1: "",
                    r2: "",
                    r3: "",
                    corretta: ""
                }]


//CREO UN ALGORITMO CHE MI CONSENTE DI INSERIRE TUTTE LE DOMANDE PRESENTI NELLA BASE DI DATI
for (var i=0;i<array.length;i++){
    document.getElementById("domande").innerHTML += 
        "<h3>"+array[i].domanda+"</h3>"+
        "<input type='radio' name='"+array[i].nome+"' value='"+array[i].r1+"'>"+"<label>"+array[i].r1+"</label><br>"+
        "<input type='radio' name='"+array[i].nome+"' value='"+array[i].r2+"'>"+"<label>"+array[i].r2+"</label><br>"+
        "<input type='radio' name='"+array[i].nome+"' value='"+array[i].r3+"'>"+"<label>"+array[i].r3+"</label><br>"

}

//CREARE UNA FUNZIONE CHE, QUANDO VIENE PREMUTO IL PULSANTE, CONTROLLA LE RISPOSTE 
// DI TUTTE LE DOMANDE (ANCHE CHE NON SIANO NULLE),
// QUINDI STAMPA IL NUMERO DI RISPOSTE CORRETTE E L'ELENCO DELLE RISPOSTE ERRATE
// utilizzare un ciclo for per effettuare il controllo, similmente a quanto fatto per inserire le domande
// la stampa deve avvenire attraverso un apposito div



function ciccio (){



    // ESTRAGGO I DATI DAL FORM
    nome= document.getElementById("name").value
    cognome = document.getElementById("cognome").value
    risposta1 = document.querySelector('input[name="fav_language"]:checked').value;

    document.getElementById("esito").innerHTML+="<p> quiz eseguito da "+nome +" "+cognome+"</p><p>prima risposta: "+risposta1+"</p>"
}