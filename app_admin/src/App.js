import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TipoList from "./TipoList";
import TipoForm from "./TipoForm";
import TipoSrv from "./services/TipoSrv";
import PrimeReact from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";

function App() {
  //Para o list
  const [tipos, setTipos] = useState([]);

  //Para o form
  const initialState = { id: null, descricao: "" };
  const [tipo, setTipo] = useState(initialState);
  const [editando, setEditando] = useState(false);

  const toastRef = useRef();

  // let tiposList = [
  //   { id: 1, descricao: "Comum" },
  //   { id: 2, descricao: "Adminstrador" },
  // ];

  useEffect(() => {
    onClickAtualizar(); // ao inicializar executa o método para atualizar
  }, []);

  const onClickAtualizar = () => {
    TipoSrv.listar()
      .then((response) => {
        setTipos(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Usuários atualizados",
          life: 3000,
        });
      })
      .catch((e) => {
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 3000,
        });
      });
  };

  //Funções para inserção
  const inserir = () => {
    setTipo(initialState);
    setEditando(true);
  };

  const salvar = () => {
    if (tipo._id == null) {
      // inclussão
      TipoSrv.incluir(tipo)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Salvou",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: e.message,
            life: 4000,
          });
        });
    } else {
      // alteração
      TipoSrv.alterar(tipo)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Salvou",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: e.message,
            life: 4000,
          });
        });
    }
  };

  const cancelar = () => {
    console.log("Cancelou ...");
    setEditando(false);
  };

  //Funções para edição e deleção
  const editar = (id) => {
    setTipo(tipos.filter((tipo) => tipo.id === id)[0]);
    setEditando(true);
  };

  const excluir = (_id) => {
    TipoSrv.excluir(_id)
      .then((response) => {
        onClickAtualizar();
        toastRef.current.show({
          severity: "success",
          summary: "Excluído",
          life: 2000,
        });
      })
      .catch((e) => {
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 4000,
        });
      });
  };

  if (!editando) {
    return (
      <div className="App">
        <TipoList
          tipos={tipos}
          onClickAtualizar={onClickAtualizar}
          inserir={inserir}
          editar={editar}
          excluir={excluir}
        />
        <Toast ref={toastRef} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <TipoForm
          tipo={tipo}
          setTipo={setTipo}
          salvar={salvar}
          cancelar={cancelar}
        />
        <Toast ref={toastRef} />
      </div>
    );
  }
}

export default App;
