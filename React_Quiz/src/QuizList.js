

import { useState, useEffect } from 'react';

//Questo componente acquisice l'elenco dei quiz tramite una fecth e li renderizza sullo schermo attraverso il .map
export default function QuizList({onClickHandling}) {
    //Creo uno stato che contiene un array di quiz. Inizialmente l'array è vuoto
    const [quizList, setQuizList] = useState([]);

    //Utilizzo Use effect per lanciare la fetch ed ottenere quindi la lista dei quiz
    //inserisco [] come secondo parametro di useEffect per specificare che la fecth andrà fatta una sola volta
                        //al lancio del programma
    useEffect(()=>{fetch("http://localhost:3001/getQuizList",{method: "get"}).then(
      (res) => {
                return res.json();}).then(
                                    (data) => {
                                    console.log(data);
                                    setQuizList(data) })},[])
    return (
    <>
    {/*Renderizzo la lista dei quiz acquisita utilizzando quizList.map */}
        {quizList.map((quiz)=>{

            return (<div key={quiz.codQuiz}>
            <p > questo è il quiz n {quiz.codQuiz}, che contiene {quiz.numeroDomande} domande</p>
            {/*Creo un pulsante per ogni quiz, al quale passo la properties ereditatà dal componente game.
                quando clicco il pulsante, il valore di quiz.codQuiz viene inserito nello stato nQuiz del componente Game */}
            <input type="button" value="CLICCAMI PER INIZIARE" onClick={() =>onClickHandling(quiz.codQuiz)}></input><br></br>
            <br/>
            </div>)
        })}
    </>)
}