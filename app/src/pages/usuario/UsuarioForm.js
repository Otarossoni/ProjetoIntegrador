import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { Password } from "primereact/password";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";
import "../../css/body.css";

const UsuarioForm = (props) => {
  addLocale("pt_BR", {
    closeText: "Fechar",
    prevText: "Anterior",
    nextText: "Próximo",
    currentText: "Começo",
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthNamesShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    dayNames: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
    weekHeader: "Semana",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "",
    timeOnlyTitle: "Só Horas",
    timeText: "Tempo",
    hourText: "Hora",
    minuteText: "Minuto",
    secondText: "Segundo",
    ampm: false,
    month: "Mês",
    week: "Semana",
    day: "Dia",
    allDayText: "Todo Dia",
  });

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
      <div style={{ padding: 15 }}>
        <div>
          <h2 className="title" style={{ textAlign: "center" }}>
            Cadastro de Usuários
          </h2>
          <br />
          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
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
                      value: 6,
                      message: "O nome deve possuir no mínimo 6 caracteres!",
                    },
                  })}
                  defaultValue={props.usuario.nome}
                  onChange={handleInputChange}
                />
                <label htmlFor="nome">Nome</label>
              </span>
              {errors.nome && (
                <span style={{ color: "#733AC8" }}>{errors.nome.message}</span>
              )}
            </div>
          </div>
          <br />
          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
              <span className="p-float-label">
                <InputText
                  name="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "O campo e-mail é obrigatório!",
                    },
                    maxLength: {
                      value: 50,
                      message: "O e-mail pode ter no máximo 50 caracteres!",
                    },
                    minLength: {
                      value: 6,
                      message: "O e-mail deve possuir no mínimo 6 caracteres!",
                    },
                  })}
                  defaultValue={props.usuario.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="email">E-mail</label>
              </span>
              {errors.email && (
                <span style={{ color: "#733AC8" }}>{errors.email.message}</span>
              )}
            </div>
          </div>
          <br />
          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
              <span className="p-float-label">
                <InputText
                  name="cpf"
                  {...register("cpf", {
                    required: {
                      value: true,
                      message: "O campo cpf é obrigatório!",
                    },
                    maxLength: {
                      value: 50,
                      message: "O cpf pode ter no máximo 50 caracteres!",
                    },
                    minLength: {
                      value: 6,
                      message: "O cpf deve possuir no mínimo 6 caracteres!",
                    },
                  })}
                  defaultValue={props.usuario.cpf}
                  onChange={handleInputChange}
                />
                <label htmlFor="cpf">CPF</label>
              </span>
              {errors.cpf && (
                <span style={{ color: "#733AC8" }}>{errors.cpf.message}</span>
              )}
            </div>
          </div>
          <br />
          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
              <Password
                name="senha"
                placeholder="Senha..."
                {...register("senha", {})}
                onChange={handleInputChange}
                toggleMask
                promptLabel="Digite a senha"
                weakLabel="Senha fraca"
                mediumLabel="Senha média"
                strongLabel="Senha forte"
              />
              {errors.senha && (
                <span style={{ color: "red" }}>{errors.senha.message}</span>
              )}
            </div>
          </div>
          <br />
          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
              <Password
                name="contraSenha"
                placeholder="Repita a Senha..."
                defaultValue={contraSenha}
                onChange={(e) => setContraSenha(e.target.value)}
                toggleMask
                promptLabel="Digite a senha"
                weakLabel="Senha fraca"
                mediumLabel="Senha média"
                strongLabel="Senha forte"
              />
            </div>
          </div>
          <br />
          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
              <Calendar
                name="dataNascimento"
                placeholder="Data de Nascimento..."
                value={props.usuario.dataNascimento}
                onChange={handleInputChange}
                dateFormat="dd-mm-yy"
                showIcon
                locale="pt_BR"
              />
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
export default UsuarioForm;
