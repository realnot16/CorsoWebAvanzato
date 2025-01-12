import React, { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [error, setError] = useState(null);

  const API_URL = 'http://localhost:3000/users';

  // Fetch per ottenere gli utenti
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nel recupero degli utenti');
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message));
  }, []);

  // Funzione per aggiungere un utente
  const addUser = () => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nell\'aggiunta dell\'utente');
        }
        return response.json();
      })
      .then(() => {
        setUsers([...users, newUser]); // Aggiungi localmente
        setNewUser({ name: '', email: '' }); // Resetta i campi
      })
      .catch((err) => setError(err.message));
  };

  // Funzione per eliminare un utente
  const deleteUser = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nell\'eliminazione dell\'utente');
        }
        setUsers(users.filter((user) => user.id !== id)); // Aggiorna la lista localmente
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <h1>Gestione Utenti</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <h2>Aggiungi Utente</h2>
        <input
          type="text"
          placeholder="Nome"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={addUser}>Aggiungi</button>
      </div>
      <div>
        <h2>Lista Utenti</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
              <button onClick={() => deleteUser(user.id)}>Elimina</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;