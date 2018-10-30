import React from "react";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import moment from "moment";
import {
  Container,
  Text,
  ChartModal,
  RedButton,
  ChartContainer
} from "../../Styles/Table";
import icon from "../../Images/bchart.png";
import Biglogo from "../../Images/Biglogo.png";
import LoadingScreen from "react-loading-screen";

import {
  ComposedChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar
} from "recharts";

import "../styles.css";
import { FIRMES, CONTRACTS } from "./auth";

class FirmesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page: 1,
      loading: true,
      open: false,
      fetchInfo: {
        dataTotalSize: 10
      },
      data: [
        { date: "2014", CompraNet: 550, amt: 1400 },
        { date: "2015", CompraNet: 550, amt: 1400 },

        { date: "13-04-2016(SFP)", CompraNet: 1098, amt: 989, TIME: -308 },
        { date: "2017", SAT69B: 308, TIME: -308 },
        { date: "2018", CompraNet: 1200, amt: 1228 }
      ]
    };
  }

  stateChange = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1500);
  };

  componentDidMount() {
    this.loadData();
    this.stateChange();
  }

  handlePaginator = (page, sizePerPage) => {
    this.setState({ page }, this.loadData);
  };

  handleSearch = (searchText, colInfos, multiColumnSearch) => {
    this.setState({ searchText }, this.loadData);
  };

  loadData = () => {
    const { page, items } = this.state;
    let size = 10;

    FIRMES(size, page).then(response => {
      //console.log(response);
      this.setState({
        items: response,
        fetchInfo: {
          dataTotalSize: 20000
        }
      });
    });
  };

  onToggleModal = item => {
    // TODO: Call API with item as prop}
    console.log(item);
    var it = JSON.stringify({ razon_social: item });
    var form = new FormData();

    form.append("entityName", item);

    CONTRACTS(it).then(response => {
      console.log(response);
    });

    this.setState({ open: !this.state.open });
  };

  ChartFormatter = item => {
    return (
      <ChartContainer>
        <RedButton onClick={() => this.onToggleModal(item)} color="danger">
          Graficar
          <ChartModal open={false} onClose={this.onToggleModal}>
            <span
              style={{
                fontWeight: "bold",
                fontFamily: "IBM Plex Mono !important"
              }}
            >
              Miles de pesos corrientes
            </span>
            <ComposedChart width={600} height={400} data={this.state.data}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis
                tick={{ fontFamily: "IBM Plex Mono!important" }}
                dataKey="date"
                domain={[0, 5000]}
              />

              <YAxis
                tick={{ fontFamily: "IBM Plex Mono!important" }}
                ticks={[0, 500, 1000, 1500, 2000]}
              />
              <Tooltip />
              <Legend verticalAlign="top" />
              <Bar dataKey="CompraNet" barSize={5} fill="#ff3d4e" />
              <Line dataKey="SAT69B" stroke="#000" />
              <Line dataKey="TIME" stroke="red" />
            </ComposedChart>

            <Text> San Juán del Rio SA de CV</Text>
          </ChartModal>{" "}
        </RedButton>
      </ChartContainer>
    );
  };
  render() {
    const { items, fetchInfo, page, open } = this.state,
      options = {
        page,
        sizePerPage: 10,
        onPageChange: this.handlePaginator,
        onSearchChange: this.handleSearch
      };

    return (
      <Container responsive>
        <LoadingScreen
          loading={false}
          bgColor="#f1f1f1"
          spinnerColor="#a91818"
          textColor="#000"
          logoSrc={Biglogo}
          text="Diorama"
        >
          <BootstrapTable
            class="table table-hover"
            data={items}
            version="4"
            hover
            pagination
            remote={true}
            fetchInfo={fetchInfo}
            options={options}
            headerStyle={{ background: "#f2f2f2" }}
            bodyStyle={{ fontSize: 12 }}
            search
            searchPlaceholder="Haz una búsqueda..."
          >
            <TableHeaderColumn isKey dataField="_id">
              RFC
            </TableHeaderColumn>
            <TableHeaderColumn dataField="razon_social">
              Razón Social
            </TableHeaderColumn>
            <TableHeaderColumn
              dataFormat={(cell, row) => moment(cell).format("YYYY-MM-DD")}
              dataField="Fecha_pp"
            >
              Fecha
            </TableHeaderColumn>
            <TableHeaderColumn dataField="tipo_persona">Tipo</TableHeaderColumn>
            <TableHeaderColumn
              dataField={"razon_social"}
              dataFormat={items => this.ChartFormatter(items)}
            >
              Gráfico
            </TableHeaderColumn>
          </BootstrapTable>
        </LoadingScreen>
      </Container>
    );
  }
}

export default FirmesTable;
