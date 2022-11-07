import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, lazy, useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import LoginForm from "./pages/login/LoginForm";
import Erro404 from "./pages/erro/Erro404";
import Sobre from "./pages/sobre/Sobre";
import "./css/body.css";

const Home = lazy(() => import("./pages/home/Home"));
const UsuarioCon = lazy(() => import("./pages/usuario/UsuarioCon"));
const LojaCon = lazy(() => import("./pages/loja/LojaCon"));
const PromocaoCon = lazy(() => import("./pages/promocao/PromocaoCon"));
const DenunciaCon = lazy(() => import("./pages/denuncia/DenunciaCon"));
const ComentarioCon = lazy(() => import("./pages/comentario/ComentarioCon"));
const PromocaoAprovacaoCon = lazy(() =>
  import("./pages/promocaoAprovacao/PromocaoAprovacaoCon")
);

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
          <Route path="/denuncias" element={<DenunciaCon />} />
          <Route path="/comentarios" element={<ComentarioCon />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/promocaos/status/Aguardando"
            element={<PromocaoAprovacaoCon />}
          />
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
      label: "Aprovações",
      icon: "pi pi-fw pi-thumbs-up",
      items: [
        {
          label: "Promoções",
          icon: "pi pi-fw pi-wallet",
          command: () => {
            navigate("/promocaos/status/Aguardando");
          },
        },
      ],
    },
    {
      label: "Manutenção de Promoções",
      icon: "pi pi-fw pi-sliders-h",
      items: [
        {
          label: "Ativas",
          icon: "pi pi-fw pi-check",
          command: () => {
            navigate("/promocaos/status/Aguardando");
          },
        },
        {
          label: "Rejeitadas",
          icon: "pi pi-fw pi-ban",
          command: () => {
            navigate("/promocaos/status/Aguardando");
          },
        },
        {
          label: "Expiradas",
          icon: "pi pi-fw pi-clock",
          command: () => {
            navigate("/promocaos/status/Aguardando");
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
    {
      label: "Sair",
      icon: "pi pi-fw pi-power-off",
      command: () => {
        sessionStorage.setItem("token", "");
      },
      url: "/",
    },
  ];

  const end = <h4 className="menuBarTitle">Administração</h4>;

  return <Menubar model={items} className="ui-menubar" end={end} />;
}

export default App;
