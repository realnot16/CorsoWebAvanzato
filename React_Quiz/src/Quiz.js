import { useState, useEffect } from 'react';


  //Questa funzione, date le properties, genera una riga di una domanda
  //daVisualizzare -> testo della domanda
  //statoQuiz -> se il quiz è finito o meno
  //option -> contiene la funzione per aggiornare l'opzione selezionata
  //id -> contiene l'id della domanda
  //check -> vero o falso. Serve per capire se questa è la risposta selezionata. In caso vero, appare il pallino pieno
  function Opzione({daVisualizzare,statoQuiz,option, id, check}){
    return(
    <>
        <input
        type="radio"
        value={daVisualizzare}
        onChange={option}
        disabled={statoQuiz===true}
        checked= {check}
        id= {id}
        
      /><label>{daVisualizzare}</label><br/>
    </>)
  }
  
  //Questa funzione, date le properties, renderizza la domanda e le 4 risposte.
  // domanda -> contiene il testo della domanda
  // risposte -> è un array contenente le risposte
  // statoQuiz -> vero/falso, indica se il quiz è finito. va passata al componente Opzione
  // option -> contiene la funzione per aggiornare l'opzione selezionata. va passata al componente Opzione
  // id -> contiene l'id della domanda. 
  // arrayRisp -> array contenente tutte le risposte del quiz. in combinazione con l'id della domanda,
                      //mi permette di verificare se la risposta individuata è uguale a quella passata al componente Opzione
  function Domanda({domanda,risposte,statoQuiz,option,id, arrayRisp}){
    return (
      <>
        <p>{domanda}</p>
        {/* map delle risposte. per ogni risposta, creo un componente figlio Opzione */}
        {risposte.map((risposta,i)=>{
          return(
        <Opzione
          key={i}
          daVisualizzare={risposta} 
          statoQuiz={statoQuiz}
          option={option}
          id = {id}
          check = {arrayRisp[id]===risposta} //Verifico se la risposta associata all'id è uguale a quella in esame.
           />)
      })}
      </>
    )
  }

  //Funzione che, dato un array di risposte, analizza e calcola il risultato ottenuto
  function Winner({fine,risposte,data}){
    if(fine){
    var punti =0
    var errori= []
      for (var i=0;i<risposte.length;i++){
        console.log(data.domande[i].corretta)
        console.log(risposte[i])
        if (risposte[i]===data.domande[i].corretta)
          punti++;
        else
          errori.push(<p key={i}>la domanda {i+1} è sbagliata, la risposta corretta è: <b>{data.domande[i].corretta}</b> </p>)
      }
      return <>
      <p> Totalizzati {punti} punti</p>
      {errori.map((errore)=> {return errore })}
      </>
    }
  
  
  }

  export default function Quiz({nquiz}){

    // Stato che contiene i dati delle domande, acquisiti tramite
    const [data,setData] = useState()
    // Stato che contiene l'elenco delle risposte selezionate
    const [answerArray,SetAnswer] = useState([])
    // Stato che tiene traccia della domanda da visualizzare. All'inizio è visualizzata la prima domanda
    const [idDomanda,setidDomanda] = useState(0)
    // Stato che assume valore Vero o falso. Indica se il quiz è in corso oppure terminato
    const [fine,setFine] = useState(0)

    // Stato che valuta se la fetch è conclusa. Inizialmente vero. Quando i dati son caricati, diventa falso
    const [loading, setLoading] = useState(true); 

    // Una funzione che esegue il fetch dell'elenco delle domande, dato l'id di un quiz
    function fetchDomande(nquiz) {
      //il fetch viene eseguito solo quando nquiz è un valore diverso da zero, quindi solo dopo aver premuto un pulsante
      if(nquiz>0){
        fetch("http://localhost:3001/getDomande/"+nquiz,{method: "get"}).then((res) => {return res.json();}).then(
                                        (data) => {
                                        console.log("Questions uploaded")

                                        console.log(data)
                                        setData(data)   //imposta l'elenco delle domande
                                        setLoading(false); // Imposta lo stato di caricamento a false
                                        SetAnswer([]) // Svuoto l'array delle risposte
                                      })
      }
    }

    // useEffect fa si che la funzione fetchDomande venga eseguita ogni volta che nquiz cambia -> , [nquiz]
    useEffect(()=>fetchDomande(nquiz), [nquiz])

    //Questa funzione mi permette di aggiornare l'array delle risposte quando viene cliccato un radio button
    const onOptionChange = e => {
        const answ=answerArray.slice()
        console.log("IMPOSTO ANSWER")
        console.log(answ)
        answ[e.target.id]=e.target.value 
        SetAnswer(answ)
        }


    // Render condizionale
    // Questa parte del programma renderizza una schermata di caricamento, una schermata di errore
                        //oppure le domande del quiz
    if (loading) {
      return <div>Loading...</div>; // Mostra un indicatore di caricamento
    }

    if (!data) {
      return <div>Error loading data</div>; // Mostra un messaggio di errore se i dati non sono presenti
    }
    return <>
    {/* Creo la domanda del quiz associata ad idDomanda */}
    <Domanda
              id = { data.domande[idDomanda].id}
              domanda={data.domande[idDomanda].domanda} 
              risposte={data.domande[idDomanda].risposte} 
              corretta={data.domande[idDomanda].corretta}
              statoQuiz={fine}
              option={onOptionChange}
              arrayRisp= {answerArray}
            />

    {/* Questo pulsante imposta lo stato fine a vero, terminando il quiz */}
    <input
              type="button"
              value="Clicca qui per controllare"
              onClick={() => {setFine(true)}} 
            />
            <br />
    {/* Questo pulsante mi consente di andare avanti di una domanda */}
    <input
              type="button"
              value="AVANTI"
              disabled={idDomanda===data["domande"].length-1} // disabilito il pulsante se l'id è pari alla lunghezza dell'elenco delle domande
              onClick={() => {setidDomanda(idDomanda+1)}} //con il click, imposto il nuovo idDomanda a +1, andando alla successiva
            />
    <input
              type="button"
              value="INDIETRO"
              disabled={idDomanda===0} // disabilito il pulsante se l'id è pari a 0, quindi sono alla prima domanda
              onClick={() => {setidDomanda(idDomanda-1)}}  //con il click, imposto il nuovo idDomanda a -1, andando alla precedente
            />

    {/* alcune stampe di debug */}
    <p> Selected answer <strong>{answerArray}</strong></p>
    <p> stato: <strong>{fine}</strong></p>

    {/* componente Winner per valutare l'esito del quiz. */}
    <Winner fine={fine} risposte={answerArray} data={data}/>
    </>
  }