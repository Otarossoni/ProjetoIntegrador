import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import "../../css/body.css";

const LojaForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setLoja({ ...props.loja, [name]: value });
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
      <div style={{ padding: 15 }}>
        <div>
          <h2 className="title" style={{ textAlign: "center" }}>
            Cadastro de Lojas
          </h2>
          <br />
          <div className="p-fluid grid formgrid" style={{ marginLeft: "33%" }}>
            <div className="field col-6 md:col-6">
              <span className="p-float-label">
                <InputText
                  name="nomeFantasia"
                  {...register("nomeFantasia", {
                    required: {
                      value: true,
                      message: "O campo nome fantasia é obrigatório!",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        "O nome fantasia pode ter no máximo 50 caracteres!",
                    },
                    minLength: {
                      value: 6,
                      message:
                        "O nome fantasia deve possuir no mínimo 6 caracteres!",
                    },
                  })}
                  defaultValue={props.loja.nomeFantasia}
                  onChange={handleInputChange}
                />
                <label htmlFor="nomeFantasia">Nome Fantasia</label>
              </span>
              {errors.nomeFantasia && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.nomeFantasia.message}
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
                      message: "A URL é obrigatória!",
                    },
                    maxLength: {
                      value: 50,
                      message: "A URL pode ter no máximo 50 caracteres!",
                    },
                    minLength: {
                      value: 6,
                      message: "A URL deve possuir no mínimo 6 caracteres!",
                    },
                  })}
                  defaultValue={props.loja.url}
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
export default LojaForm;
