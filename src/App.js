import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/login/Login";
import Contato from "./contatos/contato.js";
import Home from "./home/Home";
import NossoTime from "./nosso-time/NossoTime";
import Servico from "./servicos/Servico";
import SobreNos from "./sobre-nos/SobreNos";
import Treino from "./treino/Treino";

import Signup from "./auth/register/Signup";
import { userContext } from './context/UserContext';

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
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
