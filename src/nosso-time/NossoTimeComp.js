import T1 from "../imgs/t1.jpg";
import T2 from "../imgs/t2.jpg";
import T3 from "../imgs/t3.jpg";
import "./nossoTime.css";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

function NossoTimeComp() {
  return (
    <section style={{ backgroundColor: "rgb(56, 56, 56)", height: "700px"}}>
      <div class="row">
        <h1 className="titleT">Nosso Time</h1>
      </div>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={T1} alt="treinador" />
            </div>
            <h3> Terrik Turner</h3>
            <p>Personal Trainer</p>
            <div class="icons">
              <a href="#!">
                <FaTwitter />
              </a>
              <a href="#!">
                <FaLinkedin />
              </a>
              <a href="#!">
                <FaFacebook />
              </a>
              <a href="#!">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={T2} alt="treinador" />
            </div>
            <h3> Bryant Hall</h3>
            <p>Personal Trainer</p>
            <div class="icons">
              <a href="#!">
                <FaTwitter />
              </a>
              <a href="#!">
                <FaLinkedin />
              </a>
              <a href="#!">
                <FaFacebook />
              </a>
              <a href="#!">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={T3} alt="treinador" />
            </div>
            <h3> Dave James </h3>
            <p>Personal Trainer</p>
            <div class="icons">
              <a href="#!">
                <FaTwitter />
              </a>
              <a href="#!">
                <FaLinkedin />
              </a>
              <a href="#!">
                <FaFacebook />
              </a>
              <a href="#!">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NossoTimeComp;
