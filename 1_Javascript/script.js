// Array di domande e risposte
const questions = [
    {
        id: "0",
        question: "Chi ha scoperto l'America?",
        options: ["Magellano", "Colombo", "Vespucci"],
        correct: "Colombo"
    },
    {
        id: "1",
        question: "Qual è il pianeta più vicino al Sole?",
        options: ["Venere", "Mercurio", "Marte"],
        correct: "Mercurio"
    },
    {
        id: "2",
        question: "Qual è la capitale della Francia?",
        options: ["Madrid", "Parigi", "Berlino"],
        correct: "Parigi"
    },
    {
        id: "3",
        question: "In che anno è iniziata la Seconda Guerra Mondiale?",
        options: ["1939", "1945", "1914"],
        correct: "1939"
    }
];

// Inserimento dinamico delle domande
const questionsContainer = document.getElementById("domande");
questions.forEach((q) => {
    const questionHTML = `
        <h3>${q.question}</h3>
        ${q.options.map(option => `
            <input type='radio' name='${q.id}' value='${option}' required>
            <label>${option}</label><br>
        `).join("")}
    `;
    questionsContainer.innerHTML += questionHTML;
});

// Funzione per controllare le risposte e mostrare i risultati
function checkQuiz() {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("cognome").value.trim();
    const resultsContainer = document.getElementById("esito");
    resultsContainer.innerHTML = ""; // Resetta il contenuto precedente

    if (!name || !surname) {
        alert("Per favore, inserisci nome e cognome.");
        return;
    }

    let correctCount = 0;
    const incorrectAnswers = [];

    questions.forEach((q) => {
        const selectedOption = document.querySelector(`input[name='${q.id}']:checked`);
        if (selectedOption) {
            if (selectedOption.value === q.correct) {
                correctCount++;
            } else {
                incorrectAnswers.push(`${q.question} - Risposta corretta: ${q.correct}`);
            }
        } else {
            incorrectAnswers.push(`${q.question} - Nessuna risposta fornita.`);
        }
    });

    resultsContainer.innerHTML = `
        <p>Quiz eseguito da: ${name} ${surname}</p>
        <p>Risposte corrette: ${correctCount}/${questions.length}</p>
        <p>Dettagli errori:</p>
        <ul>
            ${incorrectAnswers.map(answer => `<li>${answer}</li>`).join("")}
        </ul>
    `;
}