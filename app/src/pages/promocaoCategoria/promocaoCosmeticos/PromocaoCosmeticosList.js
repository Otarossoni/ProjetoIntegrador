import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "../../../css/body.css";
const PromocaoCosmeticosList = (props) => {
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
      <h2 className="title">Listagem de Promoções - Cosméticos</h2>
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
          <Column field="status" header="Status" sortable filter></Column>
          <Column field="categoria" header="Categoria" sortable filter></Column>
          {/* <Column
            field="dataHoraCriado"
            header="Data de Criação"
            body={dateBodyTemplate}
            sortable
          ></Column> */}
          <Column
            field="loja_id.nomeFantasia"
            header="Loja"
            sortable
            filter
          ></Column>
          {/* <Column
            reorderable
            field="usuario_id.nome"
            header="Usuário"
            sortable
            filter
          ></Column> */}

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
export default PromocaoCosmeticosList;
