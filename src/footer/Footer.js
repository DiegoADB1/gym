import "./footer.css";
import LOGO from "../imgs/logo.png";
import { FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="pt-5 pb-5">
      <div style={{ marginLeft: 280 }}>
        <div className="row">
          <div className="col-md-3" style={{ marginRight: 90 }}>
            <h5 className="text-uppercase center">
              <img className="w-50 mt-2" src={LOGO} alt="Logo" />
            </h5>
            <div>
              <p className="text-white content text-center">
                Não importa se você é um iniciante ou um atleta experiente,
                nosso site de academia tem tudo o que você precisa para levar
                sua saúde e fitness para o próximo nível. Inscreva-se hoje e
                comece sua jornada para uma vida mais saudável e ativa!
              </p>
            </div>
            <div className="container center mt-4">
              <div className="row">
                <div className="col-md-2">
                  <a href="#!" className="icon">
                    <FiInstagram />
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="#!" className="icon">
                    <FaTwitter />
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="#!" className="icon">
                    <BsYoutube />
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="#!" className="icon">
                    <FaFacebookF />
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="#!" className="icon">
                    <MdEmail />
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="#!" className="icon">
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mt-4">
            <h5 className="title">Links úteis</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="content">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#!" className="content">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#!" className="content">
                  Nosso time
                </a>
              </li>
              <li>
                <a href="#!" className="content">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mt-4">
            <h5 className="title">Suporte</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="content">
                  Login
                </a>
              </li>
              <li>
                <a href="#!" className="content">
                  Minha conta
                </a>
              </li>
              <li>
                <a href="#!" className="content">
                  Inscreva-se
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
