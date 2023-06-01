import React, { useState } from "react";
import "./contato.css";
import AlertComp from "../alert/AlertComp";
import GoogleMap from "../map/GoogleMap";

function ContatoComp() {
  const [alert, setAlert] = useState(false)
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setAlert(true)
    setTimeout(t => setAlert(false), 3000)
  };

  return (
    <div className="container form-container backgroundColor">
      <div className="row">
        <form className="col-lg-6" onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required 
            />
          </label>
          <br />
          <label>
            E-mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </label>
          <br />
          <label>
            Mensagem:
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required 
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
          <>
            <AlertComp isVisible={alert} />
          </>
        </form>
        <div className="col-lg-6">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

export default ContatoComp;
