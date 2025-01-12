// Importazione dei moduli necessari
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Creazione dell'app Express
const app = express();
const port = 3000;

// Middleware per il parsing del body delle richieste
app.use(bodyParser.json());

// Configurazione del database MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test_db'
});

// Connessione al database
db.connect((err) => {
    if (err) {
        console.error('Errore nella connessione al database:', err);
        return;
    }
    console.log('Connesso al database MySQL!');
});

// Rotta GET per ottenere tutti gli utenti
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).send('Errore del server');
            return;
        }
        res.json(results);
    });
});

// Rotta POST per aggiungere un nuovo utente
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(query, [name, email], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).send('Errore del server');
            return;
        }
        res.status(201).send('Utente aggiunto con successo!');
    });
});

// Rotta PUT per aggiornare un utente esistente
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).send('Errore del server');
            return;
        }
        res.send('Utente aggiornato con successo!');
    });
});

// Rotta DELETE per eliminare un utente
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).send('Errore del server');
            return;
        }
        res.send('Utente eliminato con successo!');
    });
});

// Avvio del server
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});