import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import UsuarioSrv from "../usuario/UsuarioSrv";
import { AutoComplete } from "primereact/autocomplete";
import PromocaoSrv from "../promocao/PromocaoSrv";
import { Dropdown } from "primereact/dropdown";

const DenunciaForm = (props) => {
  const [promocaos, setPromocaos] = useState([]);
  const [, /*usuarios*/ setUsuarios] = useState([]);
  const [promocaosFiltradas, setPromocaosFiltradas] = useState(null);
  // const [usuariosFiltrados, setUsuariosFiltrados] = useState(null);
  const statusOptions = ["Aguardando", "Avaliada", "Desconsiderada"];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setDenuncia({ ...props.denuncia, [name]: value });
  };

  useEffect(() => {
    onClickAtualizarPromocao();
    onClickAtualizarUsuario();
  }, []);

  const onClickAtualizarPromocao = () => {
    PromocaoSrv.listar()
      .then((response) => {
        setPromocaos(response.data);
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

  const buscarPromocao = (event) => {
    setTimeout(() => {
      let _promocaosFiltradas;
      if (!event.query.trim().length) {
        _promocaosFiltradas = [...promocaos];
      } else {
        _promocaosFiltradas = promocaos.filter((promocao) => {
          return promocao.titulo
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setPromocaosFiltradas(_promocaosFiltradas);
    }, 250);
  };

  // const buscarUsuario = (event) => {
  //   setTimeout(() => {
  //     let _usuariosFiltrados;
  //     if (!event.query.trim().length) {
  //       _usuariosFiltrados = [...usuarios];
  //     } else {
  //       _usuariosFiltrados = usuarios.filter((usuario) => {
  //         return usuario.nome
  //           .toLowerCase()
  //           .startsWith(event.query.toLowerCase());
  //       });
  //     }

  //     setUsuariosFiltrados(_usuariosFiltrados);
  //   }, 250);
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ padding: 15 }}>
        <div>
          <h2 className="title" style={{ textAlign: "center" }}>
            Cadastro de Denúncias
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
                  defaultValue={props.denuncia.titulo}
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
                  })}
                  defaultValue={props.denuncia.descricao}
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
                <Dropdown
                  name="status"
                  value={props.denuncia.status}
                  options={statusOptions}
                  onChange={handleInputChange}
                />
                <label htmlFor="status">Status</label>
              </span>
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="col-6 md:col-6">
              <span className="p-float-label">
                <AutoComplete
                  name="promocao_id"
                  dropdown
                  value={props.denuncia.promocao_id}
                  suggestions={promocaosFiltradas}
                  completeMethod={buscarPromocao}
                  field="titulo"
                  onChange={handleInputChange}
                />
                <label htmlFor="promocao">Promoção</label>
              </span>
            </div>
          </div>
          <br />

          {/* <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
              <span className="p-float-label">
                <AutoComplete
                  name="usuario_id"
                  dropdown
                  value={props.denuncia.usuario_id}
                  suggestions={usuariosFiltrados}
                  completeMethod={buscarUsuario}
                  field="nome"
                  onChange={handleInputChange}
                />
                <label htmlFor="usuario">Usuário</label>
              </span>
            </div>
          </div>
          <br /> */}

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
export default DenunciaForm;
