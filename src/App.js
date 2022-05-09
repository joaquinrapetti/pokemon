import React from "react";
import { Routes, Route } from "react-router-dom";
import Navegation from "./components/Navegation/Navegation";
import AboutPage from "../src/routes/AboutPage";
import ContactPage from "../src/routes/ContactPage";
import Homepage from "../src/routes/Homepage";
import PokemonPage from "../src/routes/PokemonPage";

function App() {
  return (
    <>
      <Navegation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
