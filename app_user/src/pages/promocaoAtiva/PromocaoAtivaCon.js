import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import PromocaoAtivaList from "./PromocaoAtivaList";
import PromocaoAtivaForm from "./PromocaoAtivaForm";
import PromocaoAtivaSrv from "./PromocaoAtivaSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import DenunciaSrv from "./DenunciaSrv";
import DenunciaForm from "./DenunciaForm";

function PromocaoCon() {
  const [promocaos, setPromocaos] = useState([]);
  const initialStatePromocao = {
    id: null,
    titulo: "",
    descricao: "",
    preco: "",
    url: "",
    cupom: "",
    status: "Aguardando",
    categoria: "",
    loja_id: "",
    usuario_id: null,
  };
  const initialStateDenuncia = {
    id: null,
    titulo: "",
    descricao: "",
    usuario_id: null,
    promocao_id: "",
  };
  const [promocao, setPromocao] = useState(initialStatePromocao);
  const [denuncia, setDenuncia] = useState(initialStateDenuncia);
  const [editando, setEditando] = useState(false);
  const [editandoDenuncia, setEditandoDenuncia] = useState(false);
  const toastRef = useRef();

  const [lojas, setLojas] = useState([]);

  useEffect(() => {
    onClickAtualizar(); // ao inicializar executa o método para atualizar

    PromocaoAtivaSrv.listar()
      .then((response) => {
        setLojas(response.data);
      })
      .catch((e) => {});
  }, []);

  const onClickAtualizar = () => {
    PromocaoAtivaSrv.listar()
      .then((response) => {
        setPromocaos(response.data);
        // toastRef.current.show({
        //   severity: "success",
        //   summary: "Promoções atualizadas!",
        //   life: 3000,
        // });
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
    setPromocao(initialStatePromocao);
    setEditando(true);
  };

  const inserirDenuncia = () => {
    setDenuncia(initialStateDenuncia);
    setEditandoDenuncia(true);
    setEditando(true);
  };

  const salvarPromocao = () => {
    //inclusão
    if (promocao._id == null) {
      PromocaoAtivaSrv.incluir(promocao)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Promoção sugerida com sucesso!",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: "Campo obrigatório não informado!",
            life: 4000,
          });
        });
    } else {
      // alteração
      PromocaoAtivaSrv.alterar(promocao)
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

  const salvarDenuncia = () => {
    //inclusão
    if (denuncia._id == null) {
      DenunciaSrv.incluir(denuncia)
        .then((response) => {
          setEditando(false);
          setEditandoDenuncia(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "info",
            summary: "Denúncia realizada com sucesso!",
            icon: "pi-exclamation-triangle",
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
      DenunciaSrv.alterar(denuncia)
        .then((response) => {
          setEditando(false);
          setEditandoDenuncia(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Alterada!",
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
    setEditandoDenuncia(false);
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
    PromocaoAtivaSrv.excluir(_id)
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
        <PromocaoAtivaList
          promocaos={promocaos}
          onClickAtualizar={onClickAtualizar}
          inserir={inserir}
          inserirDenuncia={inserirDenuncia}
          editar={editar}
          excluir={excluir}
        />
        <Toast ref={toastRef} />
      </div>
    );
  } else {
    if (!editandoDenuncia) {
      return (
        <div>
          <PromocaoAtivaForm
            lojas={lojas}
            promocao={promocao}
            setPromocao={setPromocao}
            salvarPromocao={salvarPromocao}
            cancelar={cancelar}
          />
        </div>
      );
    } else {
      return (
        <div>
          <DenunciaForm
            denuncia={denuncia}
            setDenuncia={setDenuncia}
            salvarDenuncia={salvarDenuncia}
            cancelar={cancelar}
          />
          <Toast ref={toastRef} />
        </div>
      );
    }
  }
}

export default PromocaoCon;
