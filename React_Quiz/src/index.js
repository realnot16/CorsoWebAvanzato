import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';

import Game from "./Game";
import Navbar from "./Navbar"
import Dashboard from "./Dashboard"
import Layout from "./Layout"

const root = createRoot(document.getElementById("root"));
root.render(
  

    //BrowserRouter mi permette di impostare il routing delle pagine per navigare tra i miei componenti
    <BrowserRouter>

    {/*La navbar è un componente esterno al routing, verrà infatti visualizzata su tutte le pagine */}
    <Navbar />

    {/*Il routing viene specificato attraverso delle Route. Ogni Route punterà ad un componente del mio programma */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="quiz" element={<Game />} />
        </Route>
      </Routes>


    </BrowserRouter>

);