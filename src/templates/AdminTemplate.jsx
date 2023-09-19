import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/admin/common/Sidebar";

const AdminTemplate = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col lg={2} className="p-0 admin-sidebar-fixed">
          <Sidebar />
        </Col>
        <Col lg={10} className="p-4 admin-sidebar-content">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminTemplate;
