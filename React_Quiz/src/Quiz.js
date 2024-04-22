import { useState } from 'react';

import data from "./data.json";


function Winner({fine,risposta}){
  if(fine){
    if(risposta==="meloni")
      return <p> hai indovinato</p>
    else
      return <p> hai sbagliato</p>
  }

}

function Opzione({daVisualizzare,statoQuiz,option, id, arrayRisp}){
  return(
  <>
      <input
      type="radio"
      id={id}
      value={daVisualizzare}
      onChange={option}
      disabled={statoQuiz===1}
      checked= {arrayRisp[id]===daVisualizzare}
      
    /><label>{daVisualizzare}</label><br/>
  </>)
}

function Domanda({domanda,risposte,statoQuiz,option,id, arrayRisp}){
  return (
    <>
      <p>{domanda}</p>
      {risposte.map((risposta)=>{
        return(
      <Opzione 
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


export default function Quiz() {
  

  // UNO STATO PER LE RISPOSTE
  const [answerArray,SetAnswer] = useState([])
  // UNO STATO PER CAPIRE QUALE DOMANDA VISUALIZZARE
  const [idDomanda,setidDomanda] = useState(0)
  // UNO STATO PER CAPIRE SE IL QUIZ è TERMINATO
  const [fine,setFine] = useState(0)

  //QUESTA FUNZIONE AGGIORNA LA RISPOSTA, QUANDO VIENE CLICCATO UN RADIO BUTTON
  const onOptionChange = e => {
    const answ=answerArray.slice()
    answ[e.target.id]=e.target.value
    SetAnswer(answ)
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
      onClick={() => {setFine(1)}} 
    />
    <br />
    <input
      type="button"
      value="AVANTI"
      disabled={idDomanda===2}
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

    <Winner fine={fine} risposta={answerArray}/>
    
    </>;
  }
  