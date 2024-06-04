import { useState } from 'react';
import QuizList from './QuizList';
import QuizFunction from './Quiz'


export default function Quiz() {
  // QUIZ IN USO
  const [nquiz,setnQuiz] = useState(0)

  function changeQuiz(nquiz) {
      //IMPOSTO UN NUOVO QUIZ
      console.log("IMPOSTO IL QUIZ....."+nquiz)
      setnQuiz(nquiz)
  }
    return <>

      <table style={{width:"100%", backgroundColor:"yellow"}}>
      <tbody>
        <tr>
          <td style={{width:"75%"}}>
            {/*QUI INSERISCO LA RENDERIZZAZIONE DEL QUIZ*/}
            <QuizFunction nquiz={nquiz}/>
  
          </td>
          <td>
            {/*QUI INSERISCO L'ELENCO DEI QUIZ*/}
            <h1> SELEZIONA UN QUIZ</h1>
            <QuizList onClickHandling={changeQuiz}/>
          </td>
        </tr>
        </tbody>
      </table>

    </>;
  }
  