import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "../../css/body.css";
import { Link } from "react-router-dom";
const ComentarioList = (props) => {
  const paginatorLeft = (
    <Link to={"/promocaos"} activeClassName="current" className="mainColor">
      <Button type="button" icon="pi pi-wallet" className="p-button-text" />
    </Link>
  );
  const paginatorRight = (
    <Link to={"/"} activeClassName="current" className="mainColor">
      <Button type="button" icon="pi pi-home" className="p-button-text" />
    </Link>
  );

  const dateBodyTemplate = (rowData) => {
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
      <h2 className="title">Listagem de Comentários</h2>
      <div style={{ margin: "10px" }}>
        <Button
          type="button"
          icon="pi pi-refresh"
          className="p-button-rounded"
          onClick={props.onClickAtualizar}
          label="Atualizar"
          style={{ backgroundColor: "#733AC8", borderColor: "#733AC8" }}
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
        className="card"
        style={{
          margin: "1%",
        }}
      >
        <DataTable
          value={props.comentarios}
          paginator
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords}"
          rows={5}
          rowsPerPageOptions={[5, 10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          selectionMode="single"
          selection={props.comentario}
          onSelectionChange={(e) => props.setComentario(e.value)}
          emptyMessage="Nenhum registro encontrado!"
        >
          <Column field="titulo" header="Título" sortable filter></Column>
          <Column field="descricao" header="Descrição" sortable filter></Column>
          <Column
            field="dataHoraCriado"
            header="Data de Criação"
            body={dateBodyTemplate}
            sortable
          ></Column>
          <Column
            field="promocao_id.titulo"
            header="Promoção"
            sortable
            filter
          ></Column>
          <Column
            reorderable
            field="usuario_id.nome"
            header="Usuário"
            sortable
            filter
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
export default ComentarioList;
