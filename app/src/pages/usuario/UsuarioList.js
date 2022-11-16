import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "../../css/body.css";
import { Link } from "react-router-dom";
const UsuarioList = (props) => {
  const paginatorLeft = (
    <Link to={"/"} activeClassName="current" className="mainColor">
      <Button type="button" icon="pi pi-home" className="p-button-text" />
    </Link>
  );
  const paginatorRight = (
    <Link to={"/lojas"} activeClassName="current" className="mainColor">
      <Button
        type="button"
        icon="pi pi-shopping-bag"
        className="p-button-text"
      />
    </Link>
  );

  const dateBodyTemplate1 = (rowData) => {
    return new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(rowData.dataNascimento));
  };
  const dateBodyTemplate2 = (rowData) => {
    return new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(rowData.dataHoraCriado));
  };

  return (
    <div className="App">
      <br></br>
      <h2 className="title">Listagem de Usuários</h2>
      <div style={{ margin: "10px" }}>
        <Button
          type="button"
          icon="pi pi-refresh"
          className="p-button-rounded p-button-help"
          onClick={props.onClickAtualizar}
          label="Atualizar"
        ></Button>
        <span> </span>
        <Button
          type="button"
          icon="pi pi-plus-circle"
          className="p-button-rounded p-button-success"
          onClick={props.inserir}
          label="Novo"
        ></Button>
      </div>
      <div
        className="card datatable-style"
        style={{
          margin: "1%",
        }}
      >
        <DataTable
          value={props.usuarios}
          paginator
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords}"
          rows={5}
          rowsPerPageOptions={[5, 10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          selectionMode="single"
          selection={props.usuario}
          onSelectionChange={(e) => props.setUsuario(e.value)}
        >
          <Column field="nome" header="Nome" sortable filter></Column>
          <Column field="email" header="E-mail" sortable filter></Column>
          <Column field="cpf" header="CPF" sortable filter></Column>
          <Column
            field="dataNascimento"
            header="Data de Nascimento"
            body={dateBodyTemplate1}
            sortable
          ></Column>
          <Column
            field="dataHoraCriado"
            header="Data de Cadastro"
            body={dateBodyTemplate2}
            sortable
          ></Column>
          <Column
            style={{ width: "120px" }}
            header="Ações"
            body={(row) => {
              return (
                <>
                  <Button
                    type="button"
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-warning"
                    onClick={() => props.editar(row._id)}
                  ></Button>
                  <span> </span>
                  <Button
                    type="button"
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-danger"
                    onClick={() => props.excluir(row._id)}
                  ></Button>
                </>
              );
            }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};
export default UsuarioList;
