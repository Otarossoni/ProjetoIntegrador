import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "../../../css/body.css";
const PromocaoAutomotivoList = (props) => {
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
      <h2 className="title">Categoria: Automotivo</h2>
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
            emptyMessage="Sem cupom"
            sortable
            filter
            body={semCupomBodyTemplate}
          ></Column>
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
export default PromocaoAutomotivoList;
