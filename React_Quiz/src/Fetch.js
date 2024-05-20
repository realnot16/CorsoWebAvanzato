import { useState, useEffect } from 'react';
const Fetch = () => {
  const [quiz, setQuiz] = useState([]);
  useEffect(() => {

    const user = {
        user: "John Doe",
        password: "john.doe@example.com"
      };

    fetch('http://localhost:3000/', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify( user )
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setQuiz(data);
      });
  }, []);
  return (
    <div>
      {quiz.map((quiz) => (
        <>
        <p>quiz n: {quiz.id}, contiene {quiz.numeroDomande} domande e dura {quiz.tempoSvolgimento} </p> 
        </>
      ))}
    </div>
  );
};
export default Fetch;