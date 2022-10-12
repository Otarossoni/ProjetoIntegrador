import React from "react";
const TipoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setTipo({ ...props.tipo, [name]: value });
  };

  return (
    <form>
      <div class="form-group">
        <label>Descrição</label>
        <input
          class="form-control"
          type="text"
          name="tipo_descricao"
          defaultValue={props.tipo.tipo_descricao}
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <button
          type="submit"
          onClick={props.salvar}
          className="btn btn-primary btn-sm"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={props.cancelar}
          className="btn btn-primary btn-sm"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};
export default TipoForm;
