import fileDownload from "js-file-download";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import { downloadUsers, getUserByPage } from "../../../api/UserService";
import {
  downloadVehicles,
  getVehiclesByPage,
} from "../../../api/VehcileServise";
import { settings } from "../../../helpers/Settings";

const columns = [
  {
    name: "Image",
    selector: (row) => (
      <Link to={`/admin/vehicles/${row.id}`}>
        <img
          src={`${settings.apiURL}/files/display/${row.image[0]}`}
          width="110"
        />
      </Link>
    ),
    width: "180px",
  },
  {
    name: "Model",
    selector: (row) => row.model,
  },
  {
    name: "Age",
    selector: (row) => row.age,
  },
  {
    name: "Price/hour",
    selector: (row) => `$${row.pricePerHour}`,
  },
];

createTheme(
  "solarized",
  {
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
    background: {
      default: " #282a3c",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#e27108",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

const AdminVehicles = () => {
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(6);
  const navigate = useNavigate();

  const loadData = async (page) => {
    try {
      const resp = await getVehiclesByPage(page, perPage);
      const { content, totalElements } = resp.data;
      setVehicles(content);
      setTotalRows(totalElements);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePage = (page) => {
    loadData(page - 1);
  };

  const handleChangeRowsPerPage = async (newPerPage, page) => {
    try {
      const resp = await getVehiclesByPage(page - 1, newPerPage);
      const { content } = resp.data;
      setVehicles(content);
      setPerPage(newPerPage);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRowClicked = (row) => {
    navigate(`/admin/vehicles/${row.id}`);
  };

  const handleDownload = async () => {
    setDownloading(true);

    try {
      const resp = await downloadVehicles();
      fileDownload(resp.data, `Vehicles.xlsx`);
    } catch (err) {
      console.log(err);
    } finally {
      setDownloading(false);
    }
  };

  useEffect(() => {
    loadData(0);
  }, []);

  return (
    <div>
      <DataTable
        title="Vehicles"
        columns={columns}
        data={vehicles}
        progressPending={loading}
        pagination
        paginationServer
        theme="solarized"
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        onChangePage={handleChangePage}
        onRowClicked={handleRowClicked}
      />
      <ButtonGroup className="gap-2 mt-4">
        <Button variant="success" as={Link} to="/admin/vehicles/new">
          New Vehicle
        </Button>
        <Button
          variant="primary"
          onClick={handleDownload}
          disabled={downloading}
        >
          {downloading && <Spinner animation="border" size="sm" />} Download
          Vehicles
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default AdminVehicles;
