import Home from "./home/Home";
import Contato from "./contatos/contato.js";
import SobreNos from "./sobre-nos/SobreNos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NossoTime from "./nosso-time/NossoTime";
import Servico from "./servicos/Servico";
import Treino from "./treino/Treino";
import Login from "./auth/login/Login";

import { userContext } from './context/UserContext';
import { useState } from "react";

function App() {
  const getUser = () => {
    let username = localStorage.getItem("username")

    return { username };
  }

  return (
    <userContext.Provider value={getUser()}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/time" element={<NossoTime />} />
          <Route path="/servico" element={<Servico />} />
          <Route path="/treino" element={<Treino />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
