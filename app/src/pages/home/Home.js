import React from "react";
import img1 from "./home01.svg";
import "../../css/body.css";
import "../../css/form.css";
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
        <img src={img1} alt="img1" />
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
        <h2 className="genericText" style={{ fontSize: "40px" }}>
          Bem-vindo(a) ao PromoCão!
        </h2>
        <p className="genericText">
          É aqui onde você poderá administrar todos os cadastros da plataforma
          PromoCão, desde a criação de novos usuários até a criação de novas
          lojas e administração de promoções e denúncias.
        </p>
        <Link to={"/sobre"} style={{ color: "#9c27b0" }}>
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
