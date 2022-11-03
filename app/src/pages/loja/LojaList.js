import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "../../css/body.css";
import { Link } from "react-router-dom";
const LojaList = (props) => {
  const paginatorLeft = (
    <Link to={"/usuarios"} activeClassName="current" className="mainColor">
      <Button type="button" icon="pi pi-users" className="p-button-text" />
    </Link>
  );
  const paginatorRight = (
    <Link to={"/promocaos"} activeClassName="current" className="mainColor">
      <Button type="button" icon="pi pi-wallet" className="p-button-text" />
    </Link>
  );

  const dateBodyTemplate2 = (rowData) => {
    return new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(rowData.dataHoraCriado));
  };

  return (
    <div className="App">
      <br></br>
      <h2 className="title">Listagem de Lojas</h2>
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
          value={props.lojas}
          paginator
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords}"
          rows={5}
          rowsPerPageOptions={[5, 10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          selectionMode="single"
          selection={props.loja}
          onSelectionChange={(e) => props.setLoja(e.value)}
        >
          <Column
            field="nomeFantasia"
            header="Nome Fantasia"
            sortable
            filter
          ></Column>
          <Column field="url" header="URL" sortable filter></Column>
          <Column
            field="dataHoraCriado"
            header="Data de Cadastro"
            body={dateBodyTemplate2}
            sortable
          ></Column>
          <Column
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
export default LojaList;
