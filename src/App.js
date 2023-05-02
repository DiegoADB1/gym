import Home from "./home/Home";
import Contato from "./contatos/contato.js";
import SobreNos from "./sobre-nos/SobreNos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NossoTime from "./nosso-time/NossoTime";
import Servico from "./servicos/Servico";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<SobreNos/>}/>
        <Route path="/time" element={<NossoTime/>}/>
        <Route path="/servico" element={<Servico/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
