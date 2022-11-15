import React, { Suspense, lazy, useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import Erro404 from "./pages/erro/Erro404";
import Sobre from "./pages/sobre/Sobre";
import "./css/body.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route exact path="/" element={<h1>Teste</h1>} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<Erro404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

function Menu() {
  let navigate = useNavigate();
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Cadastros",
      icon: "pi pi-fw pi-inbox",
      items: [
        {
          label: "Usuários",
          icon: "pi pi-fw pi-user",
          command: () => {
            navigate("/usuarios");
          },
        },
        {
          label: "Lojas",
          icon: "pi pi-fw pi-shopping-bag",
          command: () => {
            navigate("/lojas");
          },
        },
        {
          label: "Promoções",
          icon: "pi pi-fw pi-wallet",
          command: () => {
            navigate("/promocaos");
          },
        },
        {
          label: "Denúncias",
          icon: "pi pi-fw pi-exclamation-triangle",
          command: () => {
            navigate("/denuncias");
          },
        },
        {
          label: "Comentários",
          icon: "pi pi-fw pi-comments",
          command: () => {
            navigate("/comentarios");
          },
        },
      ],
    },
    {
      label: "Sobre",
      icon: "pi pi-fw pi-question-circle",
      command: () => {
        navigate("/sobre");
      },
    },
  ];

  return <Menubar model={items} className="ui-menubar" />;
}

export default App;
