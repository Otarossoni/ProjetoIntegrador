import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "../../../css/body.css";

const PromocaoAmazonList = (props) => {
  const semCupomBodyTemplate = (rowData) => {
    const cupom = rowData.cupom;
    if (!cupom) {
      return (
        <>
          <div>Sem Cupom</div>
        </>
      );
    } else {
      return (
        <>
          <div>{cupom}</div>
        </>
      );
    }
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
      <h2 className="title">Amazon</h2>
      <div style={{ margin: "10px" }}></div>
      <div
        className="card"
        style={{
          margin: "1%",
        }}
      >
        <DataTable
          value={props.promocaos}
          paginator
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords}"
          rows={5}
          rowsPerPageOptions={[5, 10, 20, 50]}
          selectionMode="single"
          selection={props.promocao}
          onSelectionChange={(e) => props.setPromocao(e.value)}
          emptyMessage="Nenhum registro encontrado!"
        >
          <Column
            field="dataHoraCriado"
            header="Data de Envio"
            body={dateBodyTemplate2}
            sortable
          ></Column>
          <Column field="titulo" header="Título" sortable filter></Column>
          <Column field="descricao" header="Descrição" sortable filter></Column>
          <Column field="preco" header="Preço" sortable filter></Column>
          <Column field="url" header="URL" sortable filter></Column>
          <Column
            field="cupom"
            header="Cupom"
            emptyMessage="Sem cupom"
            sortable
            filter
            body={semCupomBodyTemplate}
          ></Column>
          <Column field="categoria" header="Categoria" sortable filter></Column>
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
export default PromocaoAmazonList;
