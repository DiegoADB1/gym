import AULACROSSFIT from "../../../imgs/aula-crossfit.jpg";
import AULALUTA from "../../../imgs/aula-luta.jpg";
import AULADANCA from "../../../imgs/aula-danca.jpg";
import AULACARDIO from "../../../imgs/aula-cardio.jpg";
import AULANATACAO from "../../../imgs/aula-natacao.jpg";
import "./canoffer.css";

function CanOffer() {
  return (
    <div className="container pd">
      <div className="row">
        <div className="col-lg-12 mb-5 text-center">
          <span className="fw-bolder" style={{ color: "#ec6405" }}>
            Nossas aulas
          </span>
          <h2 className="text-white">O QUE PODEMOS OFERECER</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img
              className="image mx-auto d-block"
              src={AULACROSSFIT}
              alt="logo"
            />
            <div className="d-flex justify-content-center">
              <div className="text-center up-box-description">
                <span className="classes text-uppercase">Resistência</span>
                <h5 className="description-class text-uppercase">
                  Crossfit
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              className="image mx-auto d-block"
              src={AULALUTA}
              alt="logo"
            />
            <div className="d-flex justify-content-center">
              <div className="text-center up-box-description">
                <span className="classes text-uppercase">Agilidade</span>
                <h5 className="description-class text-uppercase">
                  Luta
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              className="image mx-auto d-block"
              src={AULADANCA}
              alt="logo"
            />
            <div className="d-flex justify-content-center">
              <div className="text-center up-box-description">
                <span className="classes text-uppercase">Flexibilidade</span>
                <h5 className="description-class text-uppercase">
                  Dança
                </h5>
              </div>
            </div>
          </div>
          <div className="row pd">
            <div className="col-lg-6">
              <img
                className="image bottom-image mx-auto d-block"
                src={AULACARDIO}
                alt="logo"
              />
              <div className="d-flex justify-content-center">
                <div className="text-center bottom-box-description">
                  <span className="classes text-uppercase">Resistência</span>
                  <h5 className="description-class text-uppercase">
                    Cardio
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="image bottom-image mx-auto d-block"
                src={AULANATACAO}
                alt="logo"
              />
              <div className="d-flex justify-content-center">
                <div className="text-center bottom-box-description ">
                  <span className="classes text-uppercase">Baixo impacto</span>
                  <h5 className="description-class text-uppercase">
                    Natação
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanOffer;
