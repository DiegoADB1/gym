import Header from "./header/Header.js";
import HeaderContent from "./header/HeaderContent";
import Footer from "./footer/Footer.js";

function App() {
  return (
    <div className="container mw-100">
      <div className="row">
        <div className="col-xl-12 pt-5 pb-5 header-image">
          <Header />
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: 350, fontFamily: ["Oswald", "sans-serif"] }}
          >
            <HeaderContent name={"fodase"} />
          </div>
        </div>
      </div>
      <div>
        <p>Fodase kkkkkkkk</p>
      </div>
      <div className="row">
        <div className="col-xl-12 footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
