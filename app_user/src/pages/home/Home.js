import React from "react";
import img2 from "./home02.svg";
import "../../css/body.css";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

function Home() {
  return (
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
        <img src={img2} alt="img1" />
      </div>
      <div
        style={{
          width: "50%",
          height: "85%",
          textAlign: "center",
          marginTop: "-1%",
          marginRight: "5%",
          marginLeft: "5%",
          paddingTop: "9%",
          paddingInline: "8%",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        <h2 style={{ fontSize: "40px" }}>Bem-vindo(a) ao PromoCão!</h2>
        <p>
          É aqui é o lugar para você encontrar as melhores promoções pela
          internet a fora, onde você pode encontrar produtos eletrodomésticos,
          eletrônicos, roupas, comida, entre outros. Basta navegar pelas abas e
          aproveitar!
        </p>
        <Link to={"/sobre"}>
          <Button
            type="button"
            className="p-button-rounded p-button-help"
            label="Leia mais"
            style={{ backgroundColor: "#733AC8", borderColor: "#733AC8" }}
          ></Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
