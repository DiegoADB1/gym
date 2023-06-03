import "./header.css";
import LOGO from "../imgs/logo.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="row">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav w-50 text-center">
          <li className="col-lg-2 nav-item">
            <Link className="fw-bolder button" to="/">
              INÍCIO
            </Link>
          </li>
          <li className="col-lg-2 nav-item">
            <Link className="fw-bolder button" to="/sobre">
              NOSSA ACADEMIA
            </Link>
          </li>
          <li className="col-lg-2 nav-item">
          <Link className="fw-bolder button" to="/servico">
              SERVIÇOS
            </Link>
          </li>
          <li className="col-lg-2 nav-item">
            <Link className="fw-bolder button" to="/time">
              NOSSO TIME
            </Link>
          </li>
          <li className="col-lg-2 nav-item">
            <Link className="fw-bolder button" to="/contato">
              CONTATO
            </Link>
          </li>
        </ul>
      </div>
      <div className="row" style={{ marginRight: 20 }}>
        <div className="col-lg-3">
          <a href="#!" style={{ color: "white" }}>
            <FaFacebookF />
          </a>
        </div>
        <div className="col-lg-3">
          <a href="#!" style={{ color: "white" }}>
            <FaTwitter />
          </a>
        </div>
        <div className="col-lg-3">
          <a href="#!" style={{ color: "white" }}>
            <BsYoutube />
          </a>
        </div>
        <div className="col-lg-3">
          <a href="#!" style={{ color: "white" }}>
            <FiInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
