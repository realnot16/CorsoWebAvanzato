import React, { useState } from "react";

function ContactForm() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [contattoSelezionato, setContattoSelezionato] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  const handleChangeNome = (e) => {
    setNome(e.target.value);
  };

  const handleChangeCognome = (e) => {
    setCognome(e.target.value);
  };

  const handleChangeMessaggio = (e) => {
    setMessaggio(e.target.value);
  };

  const handleWhatsAppClick = () => {
    setContattoSelezionato("whatsapp");
  };

  const handleMailClick = () => {
    setContattoSelezionato("mail");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Controlla quale contatto è stato selezionato
    if (contattoSelezionato === "whatsapp") {
      // Qui puoi implementare la logica per inviare un messaggio WhatsApp
      console.log("Invio messaggio WhatsApp:", { nome, cognome, messaggio });
    } else if (contattoSelezionato === "mail") {
      // Qui puoi implementare la logica per inviare un'email
      console.log("Invio email:", { nome, cognome, messaggio });
    }
    // Mostra il banner
    setShowBanner(true);
    // Resetta i campi dopo l'invio
    setNome("");
    setCognome("");
    setMessaggio("");
    // Resetta il contatto selezionato
    setContattoSelezionato(null);
    // Nasconde il banner dopo 10 secondi
    setTimeout(() => {
      setShowBanner(false);
    }, 10000);
  };

  return (
    <div>
      {showBanner && (
        <div
          style={{
            backgroundColor: "lightgreen",
            padding: "10px",
            margin: "10px 0",
            textAlign: "center",
          }}
        >
          Grazie per averci scritto. Ti contatteremo al più presto.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome *</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={handleChangeNome}
            required
          />
        </div>
        <div>
          <label htmlFor="cognome">Cognome *</label>
          <input
            type="text"
            id="cognome"
            value={cognome}
            onChange={handleChangeCognome}
            required
          />
        </div>
        <div>
          <label htmlFor="messaggio">Messaggio (max 600 caratteri)</label>
          <textarea
            id="messaggio"
            value={messaggio}
            onChange={handleChangeMessaggio}
            maxLength={600}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={handleMailClick}
            disabled={contattoSelezionato === "whatsapp"}
          >
            Mandaci una mail
          </button>
          <button
            type="button"
            onClick={handleWhatsAppClick}
            disabled={contattoSelezionato === "mail"}
          >
            Scrivici al nostro numero WhatsApp
          </button>
          <button type="submit" disabled={!contattoSelezionato}>
            Invia
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;