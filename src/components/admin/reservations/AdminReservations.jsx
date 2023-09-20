import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import fileDownload from "js-file-download";
import {
  downloadReservations,
  getReservationsByPage,
} from "../../../api/ReservationService";

const columns = [
  {
    name: "Vehicle",
    selector: (row) => row.car.model,
  },
  {
    name: "Pick-up",
    selector: (row) => row.pickUpLocation,
  },
  {
    name: "Drop-off",
    selector: (row) => row.dropOffLocation,
  },
  {
    name: "Price",
    selector: (row) => row.totalPrice,
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

const AdminReservations = () => {
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const navigate = useNavigate();

  const loadData = async (page) => {
    try {
      const resp = await getReservationsByPage(page, perPage);
      const { content, totalElements } = resp.data;
      setReservations(content);
      setTotalRows(totalElements);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const hanldePerRowsChange = async (newPerPage, page) => {
    try {
      const resp = await getReservationsByPage(page - 1, newPerPage);
      const { content } = resp.data;
      setReservations(content);
      setPerPage(newPerPage);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
    setPerPage(newPerPage);
  };

  const handlePageChange = (page) => {
    loadData(page - 1);
  };

  const handleRowClicked = (row) => {
    navigate(`/admin/reservations/${row.id}`);
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const resp = await downloadReservations();
      fileDownload(resp.data, `Reservations.xlsx`);
    } catch (err) {
      console.log(err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div>
      <DataTable
        columns={columns}
        data={reservations}
        theme="solarized"
        title="All Reservations"
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={hanldePerRowsChange}
        onChangePage={handlePageChange}
        onRowClicked={handleRowClicked}
      />
      <div className="text-start mt-4 text-white">
        <Button
          variant="primary"
          onClick={handleDownload}
          style={{ width: "20rem", height: "3.5rem" }}
        >
          {downloading && <Spinner animation="border" variant="secondary" />}
          {!downloading && (
            <>
              <AiOutlineDownload /> Download Reservations
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default AdminReservations;
