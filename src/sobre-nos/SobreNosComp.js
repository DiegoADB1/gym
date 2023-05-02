import imagem from "../imgs/sobre-nos.jpg";
import ChooseUs from "../home/cards/chooseus/ChooseUs";
import "./SobreNos.css";

function SobreNosComp() {
  return (
    <div className="row mw-100">
      <div className="colorgeral">
        <div style={{marginTop: "20px"}}>
          <ChooseUs/>
        </div>
        <div class="divisao">
          <img className="imgs" src={imagem} alt="img" />
          <p className="text2">
            "Após anos de estudos e experiência em outras academias. A ideia era
            oferecer um espaço moderno e agradável para as pessoas se
            exercitarem e cuidarem da saúde. Após meses de trabalho duro, a
            academia foi inaugurada e se transformou em um centro de saúde e
            bem-estar, com uma equipe qualificada e variedade de atividades
            físicas. O compromisso com a qualidade e a dedicação em ajudar os
            clientes a alcançarem seus objetivos de forma saudável e sustentável
            são os diferenciais da academia."
          </p>
        </div>
      </div>
    </div>
  );
}
export default SobreNosComp;
