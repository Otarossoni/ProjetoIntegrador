import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import UsuarioSrv from "./UsuarioSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";

function LoginCon() {
  const initialState = {
    id: null,
    nome: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    senha: "",
  };
  const [usuario, setUsuario] = useState(initialState);
  const [criando, setCriando] = useState(false);
  const toastRef = useRef();

  const inserir = () => {
    setUsuario(initialState);
    setCriando(true);
  };

  const salvar = () => {
    //inclusão
    console.log(usuario);
    if (usuario._id == null) {
      UsuarioSrv.incluir(usuario)
        .then((response) => {
          setCriando(false);
          toastRef.current.show({
            severity: "success",
            summary: "Cadastro realizado! Faça login.",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: "E-mail ou senha inválidos!",
            life: 4000,
          });
        });
    }
  };

  const cancelar = () => {
    setCriando(false);
  };

  if (!criando) {
    return (
      <div>
        <LoginForm inserir={inserir} />
        <Toast ref={toastRef} />
      </div>
    );
  } else {
    return (
      <div>
        <RegisterForm
          usuario={usuario}
          setUsuario={setUsuario}
          salvar={salvar}
          cancelar={cancelar}
        />
      </div>
    );
  }
}

export default LoginCon;
