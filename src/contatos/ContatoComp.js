import React, { useState } from "react";
import "./contato.css";

function ContatoComp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <div className="container form-container backgroundColor class-row">
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mensagem:
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContatoComp;
