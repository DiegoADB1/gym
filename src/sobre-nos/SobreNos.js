import Header from "../header/Header.js";
import HeaderContent from "../header/HeaderContent";
import Footer from "../footer/Footer.js";
import SobreNosComp from "./SobreNosComp.js";

function SobreNos() {
  return (
    <div className="container mw-100">
      <div className="row">
        <div className="col-xl-12 pt-5 pb-5 header-image">
          <Header />
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: 350, fontFamily: ["Oswald", "sans-serif"] }}
          >
            <HeaderContent name={"Nossa Academia"} />
          </div>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "black" }}>
        <SobreNosComp />
      </div>
      <div className="row">
        <div className="col-xl-12 footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SobreNos;
