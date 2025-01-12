function handleClick(btnValue){

    if(btnValue=="="){
        //CALCOLO RISULTATO
        result=eval(document.getElementById("result").value)
        document.getElementById("result").value= result 
    }
    else{
        //AGGIORNO INTERFACCIA
        document.getElementById("result").value+=btnValue 
    }
 


}