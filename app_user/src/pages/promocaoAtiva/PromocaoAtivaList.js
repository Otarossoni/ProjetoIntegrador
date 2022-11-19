import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
const PromocaoAtivaList = (props) => {
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
  return (
    <div className="App">
      <br></br>
      <h2 className="title">Promoções farejadas pelo PromoCão</h2>
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
          label="Sugerir Promoção"
        ></Button>
        <span> </span>
        <Button
          type="button"
          icon="pi pi-exclamation-triangle"
          className="p-button-rounded p-button-danger"
          onClick={props.onClickAtualizar}
          label="Denunciar Promoção"
        ></Button>
      </div>
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
          <Column field="titulo" header="Título" sortable filter></Column>
          <Column field="descricao" header="Descrição" sortable filter></Column>
          <Column field="preco" header="Preço" sortable filter></Column>
          <Column field="url" header="URL" sortable filter></Column>
          <Column
            field="cupom"
            header="Cupom"
            sortable
            filter
            body={semCupomBodyTemplate}
          ></Column>
          <Column field="categoria" header="Categoria" sortable filter></Column>
          <Column
            field="loja_id.nomeFantasia"
            header="Loja"
            sortable
            filter
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};
export default PromocaoAtivaList;
