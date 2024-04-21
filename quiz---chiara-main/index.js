var array = [{
                id:0,
                domanda:"Quante zampe ha un gatto?",
                r1:"quattro",
                r2:"undici",
                r3:"ventisei",
                corretta:"quattro"
            },
            {
                id:1,
                domanda:"Dove si trova Parigi?",
                r1:"Messico",
                r2:"Canada",
                r3:"Francia",
                corretta:"Francia"
            }, 
            {   
                id:2,
                domanda:"Di che colore è l'erba?",
                r1:"verde",
                r2:"arancione",
                r3:"blu",
                corretta:"verde"

            },
            {
                id:3,
                domanda: "Qual è il quarto mese dell'anno?",    
                r1:"giugno",
                r2:"agosto",
                r3:"aprile",
                corretta:"aprile"
                
            }

]
var nome;
var cognome;
var risposte=[];
var i=0; // contatore domande 

function dati(){
    nome=document.getElementById("fname").value;
    cognome=document.getElementById("lname").value;
    document.querySelector("#datiUtente").style.display = "none";
    caricaPrimaDomanda();    
}

function caricaPrimaDomanda(){
    document.getElementById("domande").innerHTML += 
                                                "<h3>"+array[i].domanda+"</h3>" +
                                                "<input type='radio' id="+array[i].r1+" name='"+ array[i].id+"'value='"+array[i].r1+"'>"+"<label>"+array[i].r1+"</label><br>" +
                                                "<input type='radio' id="+array[i].r2+" name='"+ array[i].id+"'value='"+array[i].r2+"'>"+"<label>"+array[i].r2+"</label><br>" +
                                                "<input type='radio' id="+array[i].r3+" name='"+ array[i].id+"'value='"+array[i].r3+"'>"+"<label>"+array[i].r3+"</label><br>" +
                                                "<br> <input type='button' value='Avanti' onclick=avanti()>"
                                            }

function avanti(){
    risposte[i]=document.querySelector("input[name='"+array[i].id+"']:checked").value;
    i=i+1;
    document.getElementById("domande").innerHTML = 
        "<h3>"+array[i].domanda+"</h3>" +
        "<input type='radio' id="+array[i].r1+" name='"+ array[i].id+"'value='"+array[i].r1+"'>"+"<label>"+array[i].r1+"</label><br>" +
        "<input type='radio' id="+array[i].r2+" name='"+ array[i].id+"'value='"+array[i].r2+"'>"+"<label>"+array[i].r2+"</label><br>" +
        "<input type='radio' id="+array[i].r3+" name='"+ array[i].id+"'value='"+array[i].r3+"'>"+"<label>"+array[i].r3+"</label><br>" +
        "<br><input type='button' value='Indietro' onclick=indietro()>"; 
    if(i<array.length-1)
    document.getElementById("domande").innerHTML +=
                                        "<input id='av' type='button' value='Avanti' onclick=avanti()>"
    else{
        document.getElementById("domande").innerHTML +=
                                        "<input id='av' type='button' value='Risultato' onclick=result()>"
    }
    }


function indietro(){
    i=i-1;
    if(i<0){
        i=i+1;
    }
    document.getElementById("domande").innerHTML = 
                                        "<h3>"+array[i].domanda+"</h3>"+
                                        "<input type='radio' id="+array[i].r1+" name='"+ array[i].id+"'value='"+array[i].r1+"'>"+"<label>"+array[i].r1+"</label><br>"+
                                        "<input type='radio' id="+array[i].r2+" name='"+ array[i].id+"'value='"+array[i].r2+"'>"+"<label>"+array[i].r2+"</label><br>"+
                                        "<input type='radio' id="+array[i].r3+" name='"+ array[i].id+"'value='"+array[i].r3+"'>"+"<label>"+array[i].r3+"</label><br>"+
                                        "<br><input type='button' id='ind' value='Indietro' onclick=indietro()><input type='button' value='Avanti' onclick=avanti()>"
    document.getElementById(risposte[i]).checked=true;
    if(i==0)
    document.getElementById("ind").disabled=true;
    }



function result(){
    risposte[i]=document.querySelector("input[name='"+array[i].id+"']:checked").value;
    document.getElementById("domande").innerHTML="";
    var errate = [];
    let grade=0;
    let errori=0;
    for(j=0; j<array.length; j++){
        if (risposte[j]==array[j].corretta)
            grade=grade+1;
        else{
            errate[errori]=risposte[j];
            errori=errori+1;
        }
    }

    document.getElementById("esito").innerHTML +=
                                                    "<p> Ciao "+document.getElementById("fname").value + " " + document.getElementById("lname").value +
                                                    "! Hai totalizzato " + grade + " risposta/e giusta/e su " + array.length+"</p>" +
                                                    "<p> Ecco le risposte che hai sbagliato: </p>" 


    for (k=0; k<errate.length; k++){
        document.getElementById("sbagliate").innerHTML +="<p>" + errate[k] + "</p>";
    }


}