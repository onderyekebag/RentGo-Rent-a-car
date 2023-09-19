import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { downloadUsers, getUserByPage } from "../../../api/UserService";
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import fileDownload from "js-file-download";

const columns = [
  {
    name: "Firts Name",
    selector: (row) => row.firstName,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Roles",
    selector: (row) => row.roles.join("-"),
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

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const navigate = useNavigate();
  const loadData = async (page) => {
    try {
      const resp = await getUserByPage(page, perPage);
      const { content, totalElements } = resp.data;
      setUsers(content);
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
      const resp = await getUserByPage(page - 1, newPerPage);
      const { content } = resp.data;
      setUsers(content);
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
    navigate(`/admin/users/${row.id}`);
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const resp = await downloadUsers();
      fileDownload(resp.data, `Users.xlsx`);
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
        data={users}
        theme="solarized"
        title="All Users"
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
              <AiOutlineDownload /> Download Users
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default AdminUsers;
