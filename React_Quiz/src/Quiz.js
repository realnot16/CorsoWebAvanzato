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

function Opzione({daVisualizzare,statoQuiz,option}){
  return(
  <>
      <input
      type="radio"
      value={daVisualizzare}
      onChange={option}
      disabled={statoQuiz===1}
      
    /><label>{daVisualizzare}</label><br/>
  </>)
}

function Domanda({domanda,risposte,statoQuiz,option}){
  return (
    <>
      <p>{domanda}</p>
      {risposte.map((risposta)=>{
        return(
      <Opzione 
        daVisualizzare={risposta} 
        statoQuiz={statoQuiz}
        option={option}
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
    answ=answerArray
    answ.append(e.target.value)
    SetAnswer(answ)
  }
    
    return <>
    
    { 
    //CREO DOMANDE
    data.domande.map((singolaDomanda)=>{
      return (
      <Domanda 
        domanda={singolaDomanda.domanda} 
        risposte={singolaDomanda.risposte} 
        corretta={singolaDomanda.corretta}
        statoQuiz={fine}
        option={onOptionChange}
      />)
    })}

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
  