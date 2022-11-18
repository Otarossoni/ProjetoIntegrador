import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, lazy } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import Erro404 from "./pages/erro/Erro404";
import Sobre from "./pages/sobre/Sobre";
import "./css/body.css";
import "./css/form.css";

const Home = lazy(() => import("./pages/home/Home"));
const UsuarioCon = lazy(() => import("./pages/usuario/UsuarioCon"));
const LojaCon = lazy(() => import("./pages/loja/LojaCon"));
const PromocaoAtivaCon = lazy(() =>
  import("./pages/promocaoAtiva/PromocaoAtivaCon")
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
  return (
    <BrowserRouter>
      <Menu />
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/usuarios" element={<UsuarioCon />} />
          <Route path="/lojas" element={<LojaCon />} />
          <Route path="/promocaos" element={<PromocaoAtivaCon />} />
          <Route path="/sobre" element={<Sobre />} />
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

  const end = <h4 className="menuBarTitle">PromoCão</h4>;

  return <Menubar model={items} className="ui-menubar" end={end} />;
}

export default App;
