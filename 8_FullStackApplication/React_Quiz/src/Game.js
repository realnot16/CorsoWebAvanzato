import { useState } from 'react';
import QuizList from './QuizList';
import Quiz from './Quiz'


//Game è un componente che si occupa di gestire lo stato del quiz attualmente selezionato e di racchiudere
    // i due componenti figlio: Quiz e QuizList
export default function Game() {
  //Stato che conterrà l'id del quiz attualmente selezionato. 
  //All'inizio ha valore 0, ovvero nessun quiz selezionato (gli id iniziano da 1)
  const [nquiz,setnQuiz] = useState(0)

  //Funzione che mi permette di aggiornare l'id del quiz da visualizzare. 
  //Viene passata come properties al componente QuizList
  function changeQuiz(nquiz) {
      //Imposto un nuovo quiz
      console.log("IMPOSTO IL QUIZ....."+nquiz)
      setnQuiz(nquiz)
  }

  const quizListStyle = {
    margin: "auto",
    width: "50%",
    padding: "10px"
  };
    return <>
      {/* Creo una tabella di una riga e due celle per contenere i due componenti figlio */}
      <table style={{width:"100%", backgroundColor:"yellow"}}>
      <tbody>
        <tr>
          <td style={{width:"65%"}}>
            {/*QUI INSERISCO LA RENDERIZZAZIONE DEL QUIZ SELEZIONATO*/}
            <Quiz nquiz={nquiz}/>
  
          </td>
          <td>
            {/*QUI INSERISCO L'ELENCO DEI QUIZ*/}
            <h1> ELENCO DEI QUIZ</h1>
            <div style={quizListStyle} >
            <QuizList onClickHandling={changeQuiz}/>
            </div>
            
          </td>
        </tr>
        </tbody>
      </table>

    </>;
  }
  