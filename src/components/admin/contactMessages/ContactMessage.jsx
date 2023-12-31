import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { getMessagesByPage } from "../../../api/ContactService";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    name: "Subject",
    selector: (row) => row.subject,
  },
  {
    name: "visitor",
    selector: (row) => row.name,
  },
];
createTheme(
  "solarized",
  {
    text: {
      primary: "#eee",
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

const ContactMessage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const navigate = useNavigate();

  const loadData = async (page) => {
    try {
      const resp = await getMessagesByPage(page, perPage);
      setMessages(resp.data.content);
      setTotalRows(resp.data.totalElements);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const hanldePerRowsChange = async (newPerPage, page) => {
    try {
      setLoading(true);
      const resp = await getMessagesByPage(page - 1, newPerPage);
      setMessages(resp.data.content);
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
    navigate(`/admin/contact-message/${row.id}`);
  };

  useEffect(() => {
    loadData(0);
  }, []);

  return (
    <div className="container">
      <DataTable
        theme="solarized"
        title="Contact Messages"
        progressPending={loading}
        paginationServer
        paginationTotalRows={totalRows}
        columns={columns}
        data={messages}
        pagination
        onChangePage={handlePageChange}
        onChangeRowsPerPage={hanldePerRowsChange}
        onRowClicked={handleRowClicked}
      />
    </div>
  );
};

export default ContactMessage;
