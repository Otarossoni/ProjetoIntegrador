import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import LojaList from "./LojaList";
import LojaForm from "./LojaForm";
import LojaSrv from "./LojaSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

function LojaCon() {
  const [lojas, setLojas] = useState([]);
  const initialState = {
    id: null,
    nome: "",
    url: "",
  };
  const [loja, setLoja] = useState(initialState);
  const [editando, setEditando] = useState(false);
  const toastRef = useRef();

  useEffect(() => {
    onClickAtualizar(); // ao inicializar executa o método para atualizar
  }, []);

  const onClickAtualizar = () => {
    LojaSrv.listar()
      .then((response) => {
        setLojas(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Lojas atualizadas!",
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

  const inserir = () => {
    setLoja(initialState);
    setEditando(true);
  };

  const salvar = () => {
    //inclusão
    if (loja._id == null) {
      LojaSrv.incluir(loja)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Salvou!",
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
      LojaSrv.alterar(loja)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Alterado!",
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
    setEditando(false);
  };

  const editar = (id) => {
    setLoja(lojas.filter((loja) => loja._id === id)[0]);
    setEditando(true);
  };

  const excluir = (_id) => {
    confirmDialog({
      className: "p-confirm-dialog",
      message: "Confirma a exclusão da loja?",
      header: "Excluir?",
      icon: "pi pi-spin pi-spinner",
      acceptLabel: "Sim, excluir!",
      rejectLabel: "Não, voltar!",
      acceptClassName: "p-button-danger",
      rejectClassName: "p-button-primary",
      acceptIcon: "pi pi-check",
      rejectIcon: "pi pi-times",
      style: { width: "35vw" },
      accept: () => excluirConfirm(_id),
    });
  };

  const excluirConfirm = (_id) => {
    LojaSrv.excluir(_id)
      .then((response) => {
        onClickAtualizar();
        toastRef.current.show({
          severity: "success",
          summary: "Excluído!",
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
      <div>
        <ConfirmDialog />
        <LojaList
          lojas={lojas}
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
      <div>
        <LojaForm
          loja={loja}
          setLoja={setLoja}
          salvar={salvar}
          cancelar={cancelar}
        />
        <Toast ref={toastRef} />
      </div>
    );
  }
}

export default LojaCon;
