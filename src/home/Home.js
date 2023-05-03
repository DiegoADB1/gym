import Header from "../header/Header.js";
import HeaderContent from "../header/HeaderContent";
import Footer from "../footer/Footer.js";
import HomeCard from "./cards/chooseus/ChooseUs.js"
import CanOffer from "./cards/canoffer/CanOffer.js"

function Home() {
  return (
    <div className="container mw-100">
      <div className="row">
        <div className="col-xl-12 pt-5 pb-5 header-image">
          <Header />
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: 350, fontFamily: ["Oswald", "sans-serif"] }}
          >
            <HeaderContent name={"início"} />
          </div>
        </div>
      </div>
      <div className="row pd" style={{height: 400, backgroundColor: "#080808", fontFamily: ["Oswald", "sans-serif"] }}>
        <HomeCard/>
      </div>
      <div className="row" style={{height: 1200, backgroundColor: "#101112", fontFamily: ["Oswald", "sans-serif"] }}>
        <CanOffer/>
      </div>
      <div className="row">
        <div className="col-xl-12 footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home;