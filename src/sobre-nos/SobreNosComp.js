import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from "react";
import esteira from "../imgs/esteira.jpg";
import total from "../imgs/total.jpg"
import "./SobreNos.css";
import "../home/cards/chooseus/chooseus.css";

import natacao from "../imgs/natacao1.jpg"
function ChooseUs() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 mb-5 text-center">
          <span className="fw-bolder" style={{ color: "#ec6405" }}>
            Porque nos escolher?
          </span>
          <h2 className="text-white">AUMENTE SEUS LIMITES</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="text-center mb-5">
            <h4 className="text-white mb-3">
              Variedade de Equipamentos e Atividades
            </h4>
            <p className="description">
              A academia deve oferecer uma grande variedade de equipamentos de
              cardio e de força, aulas de grupo, treinamento pessoal e outras
              atividades para atender às necessidades do cliente.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-center mb-5">
            <h4 className="text-white mb-3">Profissionais Qualificados</h4>
            <p className="description">
              Uma equipe de profissionais altamente qualificados e experientes,
              como treinadores pessoais, fisioterapeutas e nutricionistas, pode
              ajudar o cliente a alcançar seus objetivos de fitness e fornecer
              orientação e apoio individualizado.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-center mb-5">
            <h4 className="text-white mb-3">Ambiente Limpo e Confortável</h4>
            <p className="description">
              Uma academia com áreas de treinamento bem iluminadas, ar
              condicionado adequado, vestiários limpos e bem equipados e
              equipamentos de alta qualidade oferece um ambiente limpo,
              confortável e agradável para os clientes.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-center mb-5">
            <h4 className="text-white mb-3">Localização e Horário Flexível</h4>
            <p className="description">
              Uma academia localizada em um local conveniente, com
              estacionamento fácil e horários flexíveis de abertura, adaptados
              às necessidades dos clientes, pode atrair mais clientes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function SobreNosComp() {
  return (
    <div>
      <ChooseUs />
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={total} className="carousel-image" />
          </div>
          <div className="carousel-item">
            <img src={esteira} className="carousel-image" />
          </div>
          <div className="carousel-item">
            <img src={natacao} className="carousel-image" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default SobreNosComp;