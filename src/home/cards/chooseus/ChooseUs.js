import "./chooseus.css";

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

export default ChooseUs;
