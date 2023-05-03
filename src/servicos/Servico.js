import Header from "../header/Header.js";
import HeaderContent from "../header/HeaderContent.js";
import Footer from "../footer/Footer.js";
import Servicos from "./servicoComp.js";
import PricingSection from "./precos.js";

function Servico() {
  return (
    <div className="container mw-100" style={{backgroundColor: "#101112"}}>
      <div className="row">
        <div className="col-xl-12 pt-5 pb-5 header-image">
          <Header />
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: 350, fontFamily: ["Oswald", "sans-serif"] }}
          >
            <div></div>
            <HeaderContent name={"serviços"} />
          </div>
        </div>
      </div>
      <div>
        <Servicos />
      </div>
      <div>
        <PricingSection />
      </div>
      <div className="row">
        <div className="col-xl-12 footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Servico;
