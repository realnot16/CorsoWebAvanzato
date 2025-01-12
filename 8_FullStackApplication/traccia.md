# Applicazione per Quiz Online

## Descrizione dell'applicazione
L'obiettivo è sviluppare un'applicazione che permetta agli utenti, previa autenticazione tramite login, di svolgere una serie di quiz.

## Caratteristiche dei quiz
- **Tempo di svolgimento:** ogni quiz ha un limite temporale definito.
- **Numero di domande:** variabile per ciascun quiz.
- **Formato delle domande:** ogni domanda ha quattro opzioni di risposta.
- **Categoria:** ogni domanda è associata a una categoria specifica.

## Gestione della base di dati
La base di dati dovrà gestire le seguenti informazioni:

### Utenti registrati
- Nome utente.
- Password.
- Email associata (per ricevere i risultati dei quiz).
- Età (numero di anni).

### Quiz e risultati
- Informazioni relative ai quiz svolti e agli esiti ottenuti.

## Funzionalità per l'utente
Dopo il login, l'utente avrà accesso a due opzioni principali:

### 1. Selezionare un quiz da svolgere
L'utente potrà scegliere un quiz da un elenco predefinito.

### 2. Visualizzare una dashboard personale
La dashboard mostrerà:
- Numero totale di quiz svolti.
- Numero di quiz superati (meno di 2 errori).
- Percentuale media di errori.
- Il quiz con il miglior punteggio.
- Il quiz con il peggior punteggio.
- L'elenco delle categorie delle domande, ordinate in ordine decrescente in base ai punteggi ottenuti.
