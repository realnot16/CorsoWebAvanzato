import { useState, useEffect } from 'react';

export default function QuizList({onClickHandling}) {
    const [quizList, setQuizList] = useState([]);

    //ACQUISICO I DATI
    useEffect(()=>{fetch("http://localhost:3001/getQuizList",{method: "get"}).then(
      (res) => {
                return res.json();}).then(
                                    (data) => {
                                    console.log(data);
                                    setQuizList(data) })},[])
    return (
    <>
    {/*RENDERIZZO I DATI ACQUISITI */}
        {quizList.map((quiz)=>{

            return (<div key={quiz.codQuiz}>
            <p > questo è il quiz n {quiz.codQuiz}, che contiene {quiz.numeroDomande} domande</p>
            <input type="button" value="CLICCAMI PER INIZIARE" onClick={() =>onClickHandling(quiz.codQuiz)}></input><br></br>
            </div>)
        })}
        <p> qui uscirà l'elenco dei quiz</p>
    </>)
}