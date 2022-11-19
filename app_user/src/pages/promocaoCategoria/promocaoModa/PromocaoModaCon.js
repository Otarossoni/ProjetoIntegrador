import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import PromocaoModaList from "./PromocaoModaList";
import PromocaoModaForm from "./PromocaoModaForm";
import PromocaoModaSrv from "./PromocaoModaSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

function PromocaoModaCon() {
  const [promocaos, setPromocaos] = useState([]);
  const initialState = {
    id: null,
    titulo: "",
    descricao: "",
    preco: "",
    url: "",
    cupom: "",
    status: "",
    categoria: "",
    loja_id: "",
    usuario_id: null,
  };
  const [promocao, setPromocao] = useState(initialState);
  const [editando, setEditando] = useState(false);
  const toastRef = useRef();

  const [lojas, setLojas] = useState([]);

  useEffect(() => {
    onClickAtualizar(); // ao inicializar executa o método para atualizar

    PromocaoModaSrv.listar()
      .then((response) => {
        setLojas(response.data);
      })
      .catch((e) => {});
  }, []);

  const onClickAtualizar = () => {
    PromocaoModaSrv.listar()
      .then((response) => {
        setPromocaos(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Promoções da categoria de moda atualizadas!",
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
      PromocaoModaSrv.incluir(promocao)
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
      PromocaoModaSrv.alterar(promocao)
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
      message: "Confirma a exclusão da promoção?",
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
    PromocaoModaSrv.excluir(_id)
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
        <PromocaoModaList
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
        <PromocaoModaForm
          lojas={lojas}
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

export default PromocaoModaCon;
