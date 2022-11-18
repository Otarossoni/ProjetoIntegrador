import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import LojaSrv from "../loja/LojaSrv";
import UsuarioSrv from "../usuario/UsuarioSrv";
import { AutoComplete } from "primereact/autocomplete";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";

const PromocaoForm = (props) => {
  const [lojas, setLojas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [lojasFiltradas, setLojasFiltradas] = useState(null);
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(null);
  const categoriasOptions = [
    "Destaques",
    "Eletrônicos",
    "Casa",
    "Moda",
    "Cosméticos",
    "Supermercado",
    "Mídias",
    "Esportes",
    "Infantil",
    "Automotivo",
  ];

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

  const buscarLoja = (event) => {
    setTimeout(() => {
      let _lojasFiltradas;
      if (!event.query.trim().length) {
        _lojasFiltradas = [...lojas];
      } else {
        _lojasFiltradas = lojas.filter((country) => {
          return country.nomeFantasia
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setLojasFiltradas(_lojasFiltradas);
    }, 250);
  };

  const buscarUsuario = (event) => {
    setTimeout(() => {
      let _usuariosFiltrados;
      if (!event.query.trim().length) {
        _usuariosFiltrados = [...usuarios];
      } else {
        _usuariosFiltrados = usuarios.filter((country) => {
          return country.nomeFantasia
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setUsuariosFiltrados(_usuariosFiltrados);
    }, 250);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ padding: 15 }}>
        <div>
          <h2 className="title" style={{ textAlign: "center" }}>
            Sugestão de Promoção
          </h2>
          <p />
          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
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
                    color: "#733AC8",
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

          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
              <span className="p-float-label">
                <InputTextarea
                  rows={5}
                  cols={30}
                  autoResize
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
                  })}
                  defaultValue={props.promocao.descricao}
                  onChange={handleInputChange}
                />
                <label htmlFor="descricao">Descrição</label>
              </span>
              {errors.descricao && (
                <span
                  style={{
                    color: "#733AC8",
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

          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
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
                    color: "#733AC8",
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

          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
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
                    color: "#733AC8",
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

          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
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
                    color: "#733AC8",
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

          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
              <span className="p-float-label">
                <Dropdown
                  name="categoria"
                  value={props.promocao.categoria}
                  options={categoriasOptions}
                  onChange={handleInputChange}
                />
                <label htmlFor="categoria">Categoria</label>
              </span>
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="col-6 md:col-6">
              <span className="p-float-label">
                <AutoComplete
                  name="loja_id"
                  dropdown
                  value={props.promocao.loja_id}
                  suggestions={lojasFiltradas}
                  completeMethod={buscarLoja}
                  field="nomeFantasia"
                  onChange={handleInputChange}
                />
                <label htmlFor="loja">Loja</label>
              </span>
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
              <span className="p-float-label">
                <AutoComplete
                  name="usuario_id"
                  dropdown
                  value={props.promocao.usuario_id}
                  suggestions={usuariosFiltrados}
                  completeMethod={buscarUsuario}
                  field="nome"
                  onChange={handleInputChange}
                  disabled
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
              className="p-button-rounded p-button-success"
              label="Salvar"
            ></Button>
            <span> </span>
            <Button
              type="button"
              icon="pi pi-undo"
              className="p-button-rounded p-button-danger"
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
