import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "../../css/body.css";
import { Link } from "react-router-dom";
const DenunciaList = (props) => {
  const paginatorLeft = (
    <Link to={"/promocaos"} activeClassName="current" className="mainColor">
      <Button type="button" icon="pi pi-wallet" className="p-button-text" />
    </Link>
  );
  const paginatorRight = (
    <Link to={"/comentarios"} activeClassName="current" className="mainColor">
      <Button type="button" icon="pi pi-comments" className="p-button-text" />
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
      <h2 className="title">Listagem de DenĂșncias - Todas</h2>
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
          value={props.denuncias}
          paginator
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords}"
          rows={5}
          rowsPerPageOptions={[5, 10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          selectionMode="single"
          selection={props.denuncia}
          onSelectionChange={(e) => props.setDenuncia(e.value)}
          emptyMessage="Nenhum registro encontrado!"
        >
          <Column
            field="dataHoraCriado"
            header="Data de CriaĂ§ĂŁo"
            body={dateBodyTemplate}
            sortable
          ></Column>
          <Column field="titulo" header="TĂ­tulo" sortable filter></Column>
          <Column field="descricao" header="DescriĂ§ĂŁo" sortable filter></Column>
          <Column field="status" header="Status" sortable></Column>
          <Column
            field="promocao_id.titulo"
            header="PromoĂ§ĂŁo"
            sortable
            filter
          ></Column>
          <Column
            reorderable
            field="usuario_id.nome"
            header="UsuĂĄrio"
            sortable
            filter
          ></Column>

          <Column
            style={{ width: "120px" }}
            header="AĂ§Ă”es"
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
export default DenunciaList;
