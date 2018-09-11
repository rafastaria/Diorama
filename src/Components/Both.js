import React from "react";
// with es6
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import { Container } from "../Styles/Table";

class Both extends React.Component {
  constructor(props) {
    super(props);

    this.options = {};
  }

  render() {
    return (
      <Container responsive>
        <BootstrapTable
          class="table table-hover"
          data={items}
          version="4"
          hover
          pagination
          options={this.options}
          headerStyle={{ background: "#f2f2f2" }}
          bodyStyle={{ fontSize: 12 }}
          search
          exportCSV
          csvFileName="firmes-sat"
          searchPlaceholder="Haz una búsqueda..."
        >
          <TableHeaderColumn isKey dataField="id" width="40px">
            Id
          </TableHeaderColumn>
          <TableHeaderColumn width="130px" dataAlign="center" dataField="rfc">
            RFC
          </TableHeaderColumn>
          <TableHeaderColumn width="280px" dataField="razon_social">
            Razón Social
          </TableHeaderColumn>
          <TableHeaderColumn
            width="50px"
            dataAlign="center"
            dataField="tipo_persona"
          >
            Tipo
          </TableHeaderColumn>

          <TableHeaderColumn
            width="100px"
            dataAlign="center"
            dataField="Fecha_pp"
          >
            Fecha
          </TableHeaderColumn>

          <TableHeaderColumn
            width="130px"
            dataAlign="center"
            dataField="titulo"
          >
            Título
          </TableHeaderColumn>
          <TableHeaderColumn width="280px" dataField="balazo">
            Descripción
          </TableHeaderColumn>
          <TableHeaderColumn width="50px" dataAlign="center" dataField="fecha">
            Fecha
          </TableHeaderColumn>
          <TableHeaderColumn
            width="80px"
            dataAlign="center"
            dataField="contenido"
          >
            Contenido
          </TableHeaderColumn>
        </BootstrapTable>
      </Container>
    );
  }
}

export default Both;
