import { useState, useEffect } from 'react';



  
  function Opzione({daVisualizzare,statoQuiz,option, id, arrayRisp}){
    return(
    <>
        <input
        type="radio"
        id={id}
        value={daVisualizzare}
        onChange={option}
        disabled={statoQuiz===true}
        checked= {arrayRisp[id]===daVisualizzare}
        
      /><label>{daVisualizzare}</label><br/>
    </>)
  }
  
  function Domanda({domanda,risposte,statoQuiz,option,id, arrayRisp}){
    return (
      <>
        <p>{domanda}</p>
        {risposte.map((risposta,i)=>{
          return(
        <Opzione
          key={i}
          id = {id}
          daVisualizzare={risposta} 
          statoQuiz={statoQuiz}
          option={option}
          arrayRisp = {arrayRisp}
           />)
      })}
      </>
    )
  }

  function Winner({fine,risposte,data}){
    if(fine){
    var punti =0
    var errori= []
    
      for (var i=0;i<risposte.length;i++){
        console.log("CICLO")
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

  export default function QuizFunction({nquiz}){

    // UNO STATO PER LE RISPOSTE
    const [answerArray,SetAnswer] = useState([])
    // UNO STATO PER CAPIRE QUALE DOMANDA VISUALIZZARE
    const [idDomanda,setidDomanda] = useState(0)
    // UNO STATO PER CAPIRE SE IL QUIZ è TERMINATO
    const [fine,setFine] = useState(0)
    // UNO STATO PER MEMORIZZARE LE DOMANDE VISUALIZZATE
    const [data,setData] = useState()

    // UNO STATO PER CAPIRE SE LA FETCH è CONCLUSA
    const [loading, setLoading] = useState(true); // Stato per il caricamento

    function svolgimento(nquiz) {
      if(nquiz>0){
        fetch("http://localhost:3001/getDomande/"+nquiz,{method: "get"}).then((res) => {return res.json();}).then(
                                        (data) => {
                                        console.log("Questions uploaded")
                                        setData(data)
                                        setLoading(false); // Imposta lo stato di caricamento a false
                                      })
      }
    }

    useEffect(()=>svolgimento(nquiz),[nquiz])
    //QUESTA FUNZIONE AGGIORNA LA RISPOSTA, QUANDO VIENE CLICCATO UN RADIO BUTTON
    const onOptionChange = e => {
        const answ=answerArray.slice()
        console.log("IMPOSTO ANSWER")
        console.log(answ)
        answ[e.target.id-1]=e.target.value
        SetAnswer(answ)
        }


    // Render condizionale
    if (loading) {
      return <div>Loading...</div>; // Mostra un indicatore di caricamento
    }

    if (!data) {
      return <div>Error loading data</div>; // Mostra un messaggio di errore se i dati non sono presenti
    }

    return <>

    <Domanda
              id = { data.domande[idDomanda].id}
              domanda={data.domande[idDomanda].domanda} 
              risposte={data.domande[idDomanda].risposte} 
              corretta={data.domande[idDomanda].corretta}
              statoQuiz={fine}
              option={onOptionChange}
              arrayRisp= {answerArray}
            />

    <input
              type="button"
              value="Clicca qui per controllare"
              onClick={() => {setFine(true)}} 
            />
            <br />
    <input
              type="button"
              value="AVANTI"
              disabled={idDomanda===data["domande"].length-1}
              onClick={() => {setidDomanda(idDomanda+1)}} 
            />
    <input
              type="button"
              value="INDIETRO"
              disabled={idDomanda===0}
              onClick={() => {setidDomanda(idDomanda-1)}} 
            />

    <p> Selected answer <strong>{answerArray}</strong></p>
    <p> stato: <strong>{fine}</strong></p>

    <Winner fine={fine} risposte={answerArray} data={data}/>
    </>
  }