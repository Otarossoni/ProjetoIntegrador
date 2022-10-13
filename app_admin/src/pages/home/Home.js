import React from "react";
import logo from "./req.svg";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <h1>PromoCão - Menu de Administração</h1>
      </header>
    </div>
  );
}

export { Home };
