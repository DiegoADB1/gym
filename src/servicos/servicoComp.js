import './servicos.css'; 
import GINA from "../imgs/ginasticagrupo.jpg";
import BODY from "../imgs/bodybuilding.jpg";
import MUSCULACAO from "../imgs/musculacao.jpg";
import PERSONAL from "../imgs/personaltrai.jpg";

const ServicesSection = () => {
    return (
      <section className="services-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span className="fw-bolder" style={{color:'#f36100'}}>O que fazemos?</span>
                <h2 style={{color:'white'}}>ELEVAMOS SEU POTENCIAL</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 order-lg-5 col-md-6 p-0">
              <div className="ss-pic">
                <img src={GINA} alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-2 col-md-6 p-0">
              <div className="ss-text">
                <h4 style={{color:'white'}}>Personal training</h4>
                <p>Aulas e instruções com os melhores professores do mercado.</p>
                <br></br><br></br>
                <br></br>
                <br></br>
                <a href="!#">Veja Mais</a>
              </div>
            </div>
            <div className="col-lg-3 order-lg-3 col-md-6 p-0">
              <div className="ss-pic">
                <img src={PERSONAL} alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-4 col-md-6 p-0">
              <div className="ss-text">
                <h4 style={{color:'white'}}>Aulas de ginástica em grupo</h4>
                <p>Participe de aulas em grupo com outros membros da academia.</p>
                <br></br><br></br><br></br>
                <a href="!#">Veja Mais</a>
              </div>
            </div>
            <div className="col-lg-3 order-lg-8 col-md-6 p-0">
              <div className="ss-pic">
                <img src={BODY} alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-7 col-md-6 p-0">
              <div className="ss-text second-row">
                <h4 style={{color:'white'}}>Body building</h4>
                <br></br><br></br><br></br><br></br>
                <p>Cresça o corpo da forma que você deseja da melhor forma possível.</p>
                <a href="!#">Veja Mais</a>
              </div>
            </div>
            <div className="col-lg-3 order-lg-6 col-md-6 p-0">
              <div className="ss-pic">
                <img src={MUSCULACAO} alt="" />
              </div>
            </div>
            <div className="col-lg-3 order-lg-1 col-md-6 p-0">
              <div className="ss-text second-row">
                <h4 style={{color:'white'}}>Musculação</h4>
                <br></br><br></br><br></br><br></br>
                <p>Melhore sua capacidade física aumentando sua força e disposição.</p>
                <a href="!#">Veja Mais</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;