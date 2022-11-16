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
const DenunciaAprovacaoCon = lazy(() =>
  import("./pages/denunciaAprovacao/DenunciaAprovacaoCon")
);
const ComentarioCon = lazy(() => import("./pages/comentario/ComentarioCon"));
const PromocaoAprovacaoCon = lazy(() =>
  import("./pages/promocaoAprovacao/PromocaoAprovacaoCon")
);
const PromocaoAtivaCon = lazy(() =>
  import("./pages/promocaoAtiva/PromocaoAtivaCon")
);
const PromocaoExpiradaCon = lazy(() =>
  import("./pages/promocaoExpirada/PromocaoExpiradaCon")
);
const PromocaoRejeitadaCon = lazy(() =>
  import("./pages/promocaoRejeitada/PromocaoRejeitadaCon")
);
const PromocaoDestaquesCon = lazy(() =>
  import("./pages/promocaoCategoria/promocaoDestaques/PromocaoDestaquesCon")
);
const PromocaoEletronicosCon = lazy(() =>
  import("./pages/promocaoCategoria/promocaoEletronicos/PromocaoEletronicosCon")
);
const PromocaoCasaCon = lazy(() =>
  import("./pages/promocaoCategoria/promocaoCasa/PromocaoCasaCon")
);
const PromocaoModaCon = lazy(() =>
  import("./pages/promocaoCategoria/promocaoModa/PromocaoModaCon")
);
const PromocaoCosmeticosCon = lazy(() =>
  import("./pages/promocaoCategoria/promocaoCosmeticos/PromocaoCosmeticosCon")
);
const PromocaoSupermercadoCon = lazy(() =>
  import(
    "./pages/promocaoCategoria/promocaoSupermercado/PromocaoSupermercadoCon"
  )
);
const PromocaoMidiasCon = lazy(() =>
  import("./pages/promocaoCategoria/promocaoMidias/PromocaoMidiasCon")
);
const PromocaoEsportesCon = lazy(() =>
  import("./pages/promocaoCategoria/promocaoEsportes/PromocaoEsportesCon")
);
const PromocaoInfantilCon = lazy(() =>
  import("./pages/promocaoCategoria/promocaoInfantil/PromocaoInfantilCon")
);
const PromocaoAutomotivoCon = lazy(() =>
  import("./pages/promocaoCategoria/promocaoAutomotivo/PromocaoAutomotivoCon")
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
          <Route
            path="/denuncias/status/Aguardando"
            element={<DenunciaAprovacaoCon />}
          />
          <Route path="/comentarios" element={<ComentarioCon />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/promocaos/status/Aguardando"
            element={<PromocaoAprovacaoCon />}
          />
          <Route
            path="/promocaos/status/Ativa"
            element={<PromocaoAtivaCon />}
          />
          <Route
            path="/promocaos/status/Expirada"
            element={<PromocaoExpiradaCon />}
          />
          <Route
            path="/promocaos/status/Rejeitada"
            element={<PromocaoRejeitadaCon />}
          />
          <Route
            path="/promocaos/categoria/Destaques"
            element={<PromocaoDestaquesCon />}
          />
          <Route
            path="/promocaos/categoria/Eletronicos"
            element={<PromocaoEletronicosCon />}
          />
          <Route
            path="/promocaos/categoria/Casa"
            element={<PromocaoCasaCon />}
          />
          <Route
            path="/promocaos/categoria/Moda"
            element={<PromocaoModaCon />}
          />
          <Route
            path="/promocaos/categoria/Cosmeticos"
            element={<PromocaoCosmeticosCon />}
          />
          <Route
            path="/promocaos/categoria/Supermercado"
            element={<PromocaoSupermercadoCon />}
          />
          <Route
            path="/promocaos/categoria/Midias"
            element={<PromocaoMidiasCon />}
          />
          <Route
            path="/promocaos/categoria/Esportes"
            element={<PromocaoEsportesCon />}
          />
          <Route
            path="/promocaos/categoria/Infantil"
            element={<PromocaoInfantilCon />}
          />
          <Route
            path="/promocaos/categoria/Automotivo"
            element={<PromocaoAutomotivoCon />}
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
        {
          label: "Denúncias",
          icon: "pi pi-fw pi-exclamation-triangle",
          command: () => {
            navigate("/denuncias/status/Aguardando");
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
            navigate("/promocaos/status/Ativa");
          },
        },
        {
          label: "Expiradas",
          icon: "pi pi-fw pi-clock",
          command: () => {
            navigate("/promocaos/status/Expirada");
          },
        },
        {
          label: "Rejeitadas",
          icon: "pi pi-fw pi-ban",
          command: () => {
            navigate("/promocaos/status/Rejeitada");
          },
        },
      ],
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
