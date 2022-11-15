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
          <img src={sobre1} alt="sobre1" />
        </div>
        <div
          style={{
            width: "50%",
            height: "85%",
            textAlign: "center",
            marginRight: "5%",
            marginLeft: "5%",
            paddingTop: "9%",
            paddingInline: "8%",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          <h2 style={{ fontSize: "40px" }}>O que é o PromoCão?</h2>
          <p>
            O PromoCão nada mais é do que o projeto final do curso de Análise e
            Desenvolvimento de Sistemas do aluno Otávio Monteiro Rossoni, que
            usou de ideia base para o projeto a plataforma de promoções Pelando
            e Promobit.
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
            marginTop: "2%",
            marginRight: "5%",
            paddingTop: "9%",
            paddingInline: "8%",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          <h2 style={{ fontSize: "40px" }}>Como funciona?</h2>
          <p>
            Essa plataforma possui o objetivo de reunir as melhores promoções de
            diversas partes da internet, onde os usuários são responsáveis por
            alimentar a plataforma com promoções para que outros usuários também
            possam aproveitar!
          </p>
          <Link to={"/"} style={{ color: "#9c27b0" }}>
            <Button
              type="button"
              className="p-button-rounded p-button-help"
              label="De volta para casa!"
            ></Button>
          </Link>
          <a
            href="http://localhost:3001/"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "2%" }}
          >
            <Button
              type="button"
              className="p-button-rounded p-button-help"
              label="Em frente!"
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
          <img src={sobre2} alt="sobre2" />
        </div>
      </div>
    </div>
  );
};

export default Sobre;
