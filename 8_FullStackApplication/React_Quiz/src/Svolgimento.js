import { useState, useEffect } from 'react';

export default function Svolgimento({quiz}) {

    useEffect(()=>{fetch("http://localhost:3001/getDomande",{method: "get"}).then(
      (res) => {
                return res.json();}).then(
                                    (data) => {
                                    console.log(data);
                                    setQuizList(data) })},[])
    return (
    <>

    </>)
}