import React, { Suspense, lazy } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import Erro404 from "./pages/erro/Erro404";
import Sobre from "./pages/sobre/Sobre";
import "./css/body.css";
import "./App.css";
const PromocaoAtivaCon = lazy(() =>
  import("./pages/promocaoAtiva/PromocaoAtivaCon")
);

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route exact path="/" element={<h1>Teste</h1>} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/promocaos" element={<PromocaoAtivaCon />} />
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
      label: "Promoções",
      icon: "pi pi-fw pi-wallet",
      command: () => {
        navigate("/promocaos");
      },
    },
    {
      label: "Categorias",
      icon: "pi pi-fw pi-list",
      items: [
        {
          label: "Destaques",
          icon: "pi pi-fw pi-star",
          command: () => {
            navigate("/promocaos/categoria/Destaques");
          },
        },
        {
          label: "Eletrônicos",
          icon: "pi pi-fw pi-bolt",
          command: () => {
            navigate("/promocaos/categoria/Eletronicos");
          },
        },
        {
          label: "Casa",
          icon: "pi pi-fw pi-building",
          command: () => {
            navigate("/promocaos/categoria/Casa");
          },
        },
        {
          label: "Moda",
          icon: "pi pi-fw pi-tags",
          command: () => {
            navigate("/promocaos/categoria/Moda");
          },
        },
        {
          label: "Cosméticos",
          icon: "pi pi-fw pi-ticket",
          command: () => {
            navigate("/promocaos/categoria/Cosmeticos");
          },
        },
        {
          label: "Supermercado",
          icon: "pi pi-fw pi-shopping-cart",
          command: () => {
            navigate("/promocaos/categoria/Supermercado");
          },
        },
        {
          label: "Mídias",
          icon: "pi pi-fw pi-book",
          command: () => {
            navigate("/promocaos/categoria/Midias");
          },
        },
        {
          label: "Esportes",
          icon: "pi pi-fw pi-ticket",
          command: () => {
            navigate("/promocaos/categoria/Esportes");
          },
        },
        {
          label: "Infantil",
          icon: "pi pi-fw pi-shield",
          command: () => {
            navigate("/promocaos/categoria/Infantil");
          },
        },
        {
          label: "Automotivo",
          icon: "pi pi-fw pi-car",
          command: () => {
            navigate("/promocaos/categoria/Automotivo");
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
