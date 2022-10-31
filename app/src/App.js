import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, lazy, useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import LoginForm from "./pages/login/LoginForm";
import "./css/body.css";

const Home = lazy(() => import("./pages/home/Home"));
const UsuarioCon = lazy(() => import("./pages/usuario/UsuarioCon"));
const LojaCon = lazy(() => import("./pages/loja/LojaCon"));
const PromocaoCon = lazy(() => import("./pages/promocao/PromocaoCon"));

function App() {
  const [token, setToken] = useState([]);
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);
  if (!token || token <= "") {
    return <LoginForm />;
  }
  return (
    <BrowserRouter>
      <Menu />
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/usuarios" element={<UsuarioCon />} />
          <Route path="/lojas" element={<LojaCon />} />
          <Route path="/promocaos" element={<PromocaoCon />} />
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
      icon: "pi pi-fw pi-file",
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
      ],
    },
    {
      label: "Sair",
      icon: "pi pi-fw pi-power-off",
      command: () => {
        sessionStorage.setItem("token", "");
      },
      url: "/",
    },
  ];

  return <Menubar model={items} className="ui-menubar" />;
}

export default App;
