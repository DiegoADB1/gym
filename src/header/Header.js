import { Link } from "react-router-dom";
import LOGO from "../imgs/logo.png";
import "./header.css";

import UserLogin from "./login/UserLogin";

function Header() {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="row">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="container-fluid text-center">
        <div className="w-100 text-center">
          <ul className="navbar-nav">
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
              <Link className="fw-bolder button" to="/treino">
                TREINO
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
      </div>
      <div className="row col-lg-2 nav-item" style={{ marginRight: 20, textAlign: "center" }}>
        <UserLogin/>
      </div>
    </nav>
  );
}

export default Header;
