import React from 'react';
import './precos.css';

function PricingSection() {
  return (
    <section className="pricing-section service-pricing spad" style={{backgroundColor:'#101112'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span style={{color:'#f36100'}}>Planos</span>
              <h2 style={{color:'white'}}>Escolha sua opção de plano</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8">
            <div className="ps-item">
              <h3>Básico</h3>
              <div className="pi-price">
                <h2>R$ 39.0</h2>
              </div>
              <ul>
                <li>Acesso ilimitado aos equipamentos</li>
                <li>Aulas em grupo básicas</li>
              </ul>
              <a href="#" className="primary-btn pricing-btn">Assine Agora!</a>
              <a href="#" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="ps-item">
              <h3>Plano Premium</h3>
              <div className="pi-price">
                <h2>R$ 59.0</h2>
              </div>
              <ul>
                <li>Acesso ilimitado aos equipamentos</li>
                <li>Aulas em grupo básicas</li>
                <li>Aulas em grupo avançadas</li>
              </ul>
              <a href="#" className="primary-btn pricing-btn">Assine Agora!</a>
              <a href="#" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="ps-item">
              <h3>Plano de Treinamento Especializado</h3>
              <div className="pi-price">
                <h2>R$ 99.0</h2>
              </div>
              <ul>
                <li>Acesso Ilimitado aos equipamentos</li>
                <li>Personal trainer</li>
                <li>Aulas básicas em grupo</li>
                <li>Aulas avançadas em grupo</li>
                <li>Plano de Treinamento Especializado</li>
              </ul>
              <a href="#" className="primary-btn pricing-btn">Assine Agora!</a>
              <a href="#" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;