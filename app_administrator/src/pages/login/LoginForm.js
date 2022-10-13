import React, { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import LoginSrv from "./LoginSrv";

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
  const [credenciais, setCredenciais] = useState({
    usuario_email: "",
    usuario_senha: "",
  });
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

      <div
        className=""
        style={{
          width: "33.3%",
          textAlign: "center",
          marginLeft: "33.3%",
          marginTop: "10%",
        }}
      >
        <h1 style={{ fontFamily: "Bodoni MT" }}>LOGIN</h1> <br />
        <div className="p-fluid grid formgrid">
          <div className="field col-12 md:col-4">
            <label htmlFor="usuario_email">E-mail</label>
            <InputText
              type={"text"}
              placeholder="exemplo@exemplo.com"
              id="usuario_email"
              className="p-inputtext-sm block mb-2"
              {...register("usuario_email", {
                required: { value: true, message: "E-mail é obrigatório" },
                minLength: { value: 2, message: "Tamanho mínimo é 2" },
              })}
              defaultValue={credenciais.usuario_email}
              onKeyUp={handleInputChange}
            />
            {errors.usuario_email && (
              <span style={{ color: "red" }}>
                {errors.usuario_email.message}
              </span>
            )}
          </div>
        </div>
        <br />
        <div className="p-fluid grid formgrid">
          <div className="field col-12 md:col-4">
            <label htmlFor="usuario_senha">Senha</label>
            <InputText
              type={"password"}
              placeholder="**********"
              id="usuario_senha"
              className="p-inputtext-sm block mb-2"
              {...register("usuario_senha", {
                required: { value: true, message: "Senha é obrigatória" },
                minLength: { value: 2, message: "Tamanho mínimo é 2" },
              })}
              defaultValue={credenciais.usuario_senha}
              onKeyUp={handleInputChange}
            />
            {errors.usuario_senha && (
              <span style={{ color: "red" }}>
                {errors.usuario_senha.message}
              </span>
            )}
          </div>
        </div>
        <br />
        <Button
          type="submit"
          label="Login"
          className="p-button-rounded p-button-info"
        />
      </div>
    </form>
  );
};
export default LoginForm;
