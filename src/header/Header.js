import "./header.css"
import LOGO from "../imgs/logo.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="row">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav w-50 text-center">
          <li className="col-lg-2 nav-item">
            <a className="fw-bolder button" href="#">
              HOME
            </a>
          </li>
          <li className="col-lg-2 nav-item">
            <a className="fw-bolder button" href="#">
              ABOUT US
            </a>
          </li>
          <li className="col-lg-2 nav-item">
            <a className="fw-bolder button" href="#">
              SERVICES
            </a>
          </li>
          <li className="col-lg-2 nav-item">
            <a className="fw-bolder button" href="#">
              OUR TEAM
            </a>
          </li>
          <li className="col-lg-2 nav-item" >
            <a className="fw-bolder button" href="#">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div className="row" style={{marginRight: 20}}>
        <div className="col-lg-3"><a href="#" style={{color: "white"}}><FaFacebookF /></a></div>
        <div className="col-lg-3"><a href="#" style={{color: "white"}}><FaTwitter /></a></div>
        <div className="col-lg-3"><a href="#" style={{color: "white"}}><BsYoutube /></a></div>
        <div className="col-lg-3"><a href="#" style={{color: "white"}}><FiInstagram /></a></div>
      </div>
    </nav>
  );
}

export default Header;
