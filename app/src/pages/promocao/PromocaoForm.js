import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import LojaSrv from "../loja/LojaSrv";
import UsuarioSrv from "../usuario/UsuarioSrv";

const PromocaoForm = (props) => {
  const [lojas, setLojas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setPromocao({ ...props.promocao, [name]: value });
  };

  useEffect(() => {
    onClickAtualizarLoja();
    onClickAtualizarUsuario();
  }, []);

  const onClickAtualizarLoja = () => {
    LojaSrv.listar()
      .then((response) => {
        setLojas(response.data);
      })
      .catch((e) => {});
  };

  const onClickAtualizarUsuario = () => {
    UsuarioSrv.listar()
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((e) => {});
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.salvar();
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
          <h5>Cadastro de Promoções</h5>
          <p />
          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputText
                  name="titulo"
                  {...register("titulo", {
                    required: {
                      value: true,
                      message: "O campo título é obrigatório!",
                    },
                    maxLength: {
                      value: 50,
                      message: "O título pode ter no máximo 50 caracteres!",
                    },
                    minLength: {
                      value: 6,
                      message: "O título deve possuir no mínimo 6 caracteres!",
                    },
                  })}
                  defaultValue={props.promocao.titulo}
                  onChange={handleInputChange}
                />
                <label htmlFor="titulo">Título</label>
              </span>
              {errors.titulo && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.titulo.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputText
                  name="descricao"
                  {...register("descricao", {
                    required: {
                      value: true,
                      message: "A descrição é obrigatória!",
                    },
                    maxLength: {
                      value: 200,
                      message: "A descrição pode ter no máximo 200 caracteres!",
                    },
                    minLength: {
                      value: 20,
                      message:
                        "A descrição deve possuir no mínimo 20 caracteres!",
                    },
                  })}
                  defaultValue={props.promocao.descricao}
                  onChange={handleInputChange}
                />
                <label htmlFor="descricao">Descrição</label>
              </span>
              {errors.descricao && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.descricao.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputText
                  name="preco"
                  {...register("preco", {
                    required: {
                      value: true,
                      message: "O preço é obrigatório!",
                    },
                  })}
                  defaultValue={props.promocao.preco}
                  onChange={handleInputChange}
                />
                <label htmlFor="preco">Preço</label>
              </span>
              {errors.preco && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.preco.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputText
                  name="url"
                  {...register("url", {
                    required: {
                      value: true,
                      message: "O URL é obrigatório!",
                    },
                  })}
                  defaultValue={props.promocao.url}
                  onChange={handleInputChange}
                />
                <label htmlFor="url">URL</label>
              </span>
              {errors.url && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.url.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputText
                  name="cupom"
                  defaultValue={props.promocao.cupom}
                  onChange={handleInputChange}
                />
                <label htmlFor="cupom">Cupom</label>
              </span>
              {errors.cupom && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.cupom.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="col-12 md:col-4">
              <span className="p-float-label">
                <Dropdown
                  name="loja"
                  defaultValue={props.promocao.loja_id}
                  onChange={handleInputChange}
                  options={lojas}
                  optionLabel="nomeFantasia"
                  optionValue="_id"
                  editable
                />
                <label htmlFor="loja">Loja</label>
              </span>
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <Dropdown
                  name="usuario"
                  defaultValue={props.promocao.usuario_id}
                  onChange={handleInputChange}
                  options={usuarios}
                  optionLabel="nome"
                  optionValue="_id"
                  editable
                />
                <label htmlFor="usuario">Usuário</label>
              </span>
            </div>
          </div>
          <br />

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
export default PromocaoForm;
