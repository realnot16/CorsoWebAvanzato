import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Quiz from "./Quiz";
import Navbar from "./navbar";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Navbar />
    <Quiz />
  </StrictMode>
);