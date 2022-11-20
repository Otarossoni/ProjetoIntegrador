import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import "../../css/body.css";
import sobre1 from "./sobre1.svg";
import sobre2 from "./sobre2.svg";

const Sobre = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "40%",
            textAlign: "center",
            marginTop: "5%",
            marginRight: "5%",
            marginLeft: "5%",
            paddingLeft: "5%",
          }}
        >
          <img src={sobre2} alt="sobre2" />
        </div>
        <div
          style={{
            width: "50%",
            height: "85%",
            textAlign: "center",
            marginRight: "5%",
            marginLeft: "5%",
            paddingTop: "8%",
            paddingInline: "8%",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          <h2 style={{ fontSize: "40px" }}>O que é o PromoCão?</h2>
          <p>
            O PromoCão nada mais é do que o projeto final do curso de Análise e
            Desenvolvimento de Sistemas do aluno Otávio Monteiro Rossoni, que
            usou de ideia base para o projeto as plataformas de promoções
            Pelando e Promobit.
          </p>
          <a
            href="https://www.pelando.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              type="button"
              className="p-button-rounded p-button-help"
              label="Para o Pelando!"
              style={{ backgroundColor: "#733AC8", borderColor: "#733AC8" }}
            ></Button>
          </a>
          <a
            style={{ margin: "2%" }}
            href="https://www.promobit.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              type="button"
              className="p-button-rounded p-button-help"
              label="Para o Promobit!"
              style={{ backgroundColor: "#733AC8", borderColor: "#733AC8" }}
            ></Button>
          </a>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "50%",
            height: "85%",
            textAlign: "center",
            marginTop: "4%",
            marginRight: "5%",
            paddingTop: "9%",
            paddingInline: "8%",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          <h2 style={{ fontSize: "40px" }}>Como funciona?</h2>
          <p>
            Nele você pode encontrar e compartilhar promoções com outros
            usuários, a fim de buscar bons preços em produtos
          </p>
          <Link to={"/"}>
            <Button
              type="button"
              className="p-button-rounded p-button-help"
              label="De volta para casa!"
              style={{ backgroundColor: "#733AC8", borderColor: "#733AC8" }}
            ></Button>
          </Link>
          <a
            href="https://github.com/Otarossoni/ProjetoIntegrador"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "2%" }}
          >
            <Button
              type="button"
              className="p-button-rounded p-button-help"
              label="GitHub"
              style={{ backgroundColor: "#733AC8", borderColor: "#733AC8" }}
            ></Button>
          </a>
        </div>
        <div
          style={{
            width: "40%",
            textAlign: "center",
            marginTop: "5%",
            marginRight: "10%",
            paddingLeft: "5%",
          }}
        >
          <img src={sobre1} alt="sobre1" />
        </div>
      </div>
    </div>
  );
};

export default Sobre;
