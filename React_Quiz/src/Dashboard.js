import { useState, useEffect } from 'react';

export default function Dashboard() {
    const [nQuiz3Errori, setnQuiz3Errori] = useState(0);
    const [elencoQuiz, setElencoQuiz] = useState([]);

    useEffect(()=>{fetch("http://localhost:3001/quiz3errori",{method: "get"}).then(
        (res) => {return res.json();}).then(
                                      (data) => {
                                        console.log("dati acquisiti")
                                      console.log(data);
                                      setnQuiz3Errori(data[0]["count(codSvolgimento)"]) })},[])


    function handleClick(emailDaCampo){
    //QUESTA FUNZIONE GESTISCE IL CLICK CHE CONSTENTE DI OTTENERE L'ELENCO DEI QUIZ SVOLTI
    console.log(emailDaCampo)

    var body_post= {email : emailDaCampo }

    fetch("http://localhost:3001/getListQuizDone",{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body_post)
    }).then(
    (res) => {
                return res.json();}).then(
                                    (data) => {
                                    console.log("getListQuizDone result")
                                    console.log(data);
                                    setElencoQuiz(data)
                                    });

    }
    
return <>
    <h1>la mia dashboard</h1>
    <table>
        <tr>
            <td>
                <p>Numero di quiz con 3 errori:</p>
            </td>
            <td>
                {nQuiz3Errori}
            </td>
        </tr>
    </table>
    <h2>Elenco quiz svolti da un utente</h2>
    <input type='email' id="email"/>
    <input type='button' value="clicca qui per ottenere lista dei quiz" onClick={()=>{handleClick(document.getElementById("email").value)}}/>

    <p>Qui di seguito l'elenco dei quiz svolti dall'utente ricercato:</p>
    {elencoQuiz.map((quiz)=>{
        return (<div key={quiz.codQuiz}>
            <p>quiz: {quiz.codQuiz}</p>
        </div>)
        })}
</>


}