import React, { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import LoginSrv from "./LoginSrv";
import logo from "./logo_733AC8_v2.svg";
import "../../css/form.css";
import "primeicons/primeicons.css";

const LoginForm = (props) => {
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setCredenciais({ ...credenciais, [id]: value });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toastRef = useRef();
  const [credenciais, setCredenciais] = useState({ email: "", senha: "" });
  const onSubmit = (data) => {
    LoginSrv.login(credenciais)
      .then((response) => {
        let token = response.data;
        if (token) {
          sessionStorage.setItem("token", token);
          window.location = "/";
        } else {
          toastRef.current.show({
            severity: "error",
            summary: "Erro no login",
            life: 5000,
          });
        }
      })
      .catch(({ response }) => {
        toastRef.current.show({
          severity: "error",
          summary: response.data,
          life: 5000,
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Toast ref={toastRef} />

      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "40%",
            textAlign: "center",
            marginTop: "5%",
            marginRight: "5%",
            marginLeft: "5%",
          }}
        >
          <img src={logo} className="" alt="logo" />
        </div>

        <div
          className=""
          style={{
            width: "40%",
            textAlign: "center",
            marginTop: "5%",
            marginRight: "5%",
            marginLeft: "5%",
            paddingTop: "9%",
            paddingInline: "8%",
            borderStyle: "solid",
            borderColor: "#3d3d3d",
            borderRadius: "50px",
          }}
        >
          <h1 className="genericText">LOGIN</h1> <br />
          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <label htmlFor="email" className="genericText">
                E-mail
              </label>
              <InputText
                type={"text"}
                placeholder="exemplo@exemplo.com"
                id="email"
                className="p-inputtext-sm block mb-2 genericFormImput"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Campo obrigatório!",
                  },
                  minLength: {
                    value: 2,
                    message: "Tamanho mínimo é 2",
                  },
                })}
                defaultValue={credenciais.email}
                onKeyUp={handleInputChange}
              />
              {errors.email && (
                <span style={{ color: "#733AC8" }}>{errors.email.message}</span>
              )}
            </div>
          </div>
          <br />
          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <label htmlFor="senha" className="genericText">
                Senha
              </label>
              <InputText
                type={"password"}
                placeholder="**********"
                id="senha"
                className="p-inputtext-sm block mb-2 genericFormImput"
                {...register("senha", {
                  required: {
                    value: true,
                    message: "Campo obrigatório!",
                  },
                  minLength: {
                    value: 2,
                    message: "Tamanho mínimo é 2",
                  },
                })}
                defaultValue={credenciais.senha}
                onKeyUp={handleInputChange}
              />
              {errors.senha && (
                <span style={{ color: "#733AC8" }}>{errors.senha.message}</span>
              )}
            </div>
          </div>
          <br />
          <Button
            type="submit"
            label="Entrar"
            className="p-button-rounded p-button-help p-button-icon"
            style={{
              width: "50%",
              backgroundColor: "#733AC8",
              borderColor: "#733AC8",
            }}
          >
            <i className="pi pi-fw pi-arrow-up-right"></i>
          </Button>
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
