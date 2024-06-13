import { useState, useEffect } from 'react';

export default function Dashboard() {
    const [nQuiz3Errori, setnQuiz3Errori] = useState(0);

    useEffect(()=>{fetch("http://localhost:3001/quiz3errori",{method: "get"}).then(
        (res) => {return res.json();}).then(
                                      (data) => {
                                        console.log("dati acquisiti")
                                      console.log(data);
                                      setnQuiz3Errori(data[0]["count(codSvolgimento)"]) })},[])
    
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
</>


}