const TipoList = (props) => {
  return (
    <div>
      <h4>Listagem de Tipos de Usuário</h4>
      <button
        onClick={props.onClickAtualizar}
        type="button"
        class="btn btn-primary btn-sm"
      >
        Atualizar Lista
      </button>
      <button
        type="button"
        class="btn btn-success btn-sm"
        onClick={props.inserir}
      >
        Inserir
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Descrição</th>
            <th>Operações</th>
          </tr>
        </thead>
        <tbody>
          {props.tipos.length > 0 ? (
            props.tipos.map((o, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{o.tipo_descricao}</td>
                <td>
                  <button
                    onClick={() => props.editar(o._id)}
                    className="btn btn-warning btn-sm"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => props.excluir(o._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Nenhum usuário.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TipoList;
