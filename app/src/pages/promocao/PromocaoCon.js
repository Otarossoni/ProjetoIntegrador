import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import PromocaoList from "./PromocaoList";
import PromocaoForm from "./PromocaoForm";
import PromocaoSrv from "./PromocaoSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

function PromocaoCon() {
  const [promocaos, setPromocaos] = useState([]);
  const initialState = {
    id: null,
    titulo: "",
    descricao: "",
    preco: "",
    url: "",
    cupom: "",
    loja_id: "",
    usuario_id: "",
  };
  const [promocao, setPromocao] = useState(initialState);
  const [editando, setEditando] = useState(false);
  const toastRef = useRef();

  useEffect(() => {
    onClickAtualizar(); // ao inicializar executa o método para atualizar
  }, []);

  const onClickAtualizar = () => {
    PromocaoSrv.listar()
      .then((response) => {
        setPromocaos(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Promoções atualizadas!",
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
    setPromocao(initialState);
    setEditando(true);
  };

  const salvar = () => {
    //inclusão
    if (promocao._id == null) {
      PromocaoSrv.incluir(promocao)
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
      PromocaoSrv.alterar(promocao)
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
    setPromocao(promocaos.filter((promocao) => promocao._id === id)[0]);
    setEditando(true);
  };

  const excluir = (_id) => {
    confirmDialog({
      className: "p-confirm-dialog",
      message: "Confirma a exclusão do usuário?",
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
    PromocaoSrv.excluir(_id)
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
        <PromocaoList
          promocaos={promocaos}
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
        <PromocaoForm
          promocao={promocao}
          setPromocao={setPromocao}
          salvar={salvar}
          cancelar={cancelar}
        />
        <Toast ref={toastRef} />
      </div>
    );
  }
}

export default PromocaoCon;
