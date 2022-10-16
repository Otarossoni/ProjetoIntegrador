import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";

const UsuarioForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setUsuario({ ...props.usuario, [name]: value });
  };

  const [contraSenha, setContraSenha] = useState();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data);
    if (contraSenha !== props.usuario.senha) {
      setError("senha", {
        type: "custom",
        message: "Senha e contra senha são diferentes!",
      });
    } else {
      props.salvar();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          paddingRight: 470,
          paddingLeft: 470,
          paddingTop: 20,
          textAlign: "center",
        }}
      >
        <div className="card" style={{ border: "none" }}>
          <h5>Cadastro de Usuários</h5>
          <p />
          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputText
                  name="nome"
                  {...register("nome", {
                    required: {
                      value: true,
                      message: "O campo nome é obrigatório!",
                    },
                    maxLength: {
                      value: 50,
                      message: "O nome pode ter no máximo 50 caracteres!",
                    },
                    minLength: {
                      value: 3,
                      message: "O nome deve possuir no mínimo 3 caracteres!",
                    },
                  })}
                  defaultValue={props.usuario.nome}
                  onChange={handleInputChange}
                />
                <label htmlFor="nome">Nome</label>
              </span>
              {errors.nome && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.nome.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputText
                  name="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "O email é obrigatório!",
                    },
                    maxLength: {
                      value: 100,
                      message: "O email pode ter no máximo 100 caracteres!",
                    },
                    minLength: {
                      value: 10,
                      message: "O email deve possuir no mínimo 10 caracteres!",
                    },
                  })}
                  defaultValue={props.usuario.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="email">Email</label>
              </span>
              {errors.email && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputText
                  type={"password"}
                  name="senha"
                  {...register("senha", {
                    minLength: {
                      value: 8,
                      message: "A senha deve possuir no mínimo 10 caracteres!",
                    },
                  })}
                  onChange={handleInputChange}
                  toggleMask
                />
                <label htmlFor="senha">Senha</label>
              </span>
              {errors.senha && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.senha.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <Password
                  name="contraSenha"
                  defaultValue={contraSenha}
                  onChange={(e) => setContraSenha(e.target.value)}
                  toggleMask
                />
                <label htmlFor="contraSenha">Contra Senha</label>
              </span>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Button
              type="submit"
              icon="pi pi-save"
              className="p-button-rounded p-button-text "
              label="Salvar"
            ></Button>
            <Button
              type="button"
              icon="pi pi-undo"
              className="p-button-rounded p-button-text"
              label="Cancelar"
              onClick={props.cancelar}
            ></Button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default UsuarioForm;
