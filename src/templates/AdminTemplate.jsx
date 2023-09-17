import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/admin/common/Sidebar";

const AdminTemplate = ({ children }) => {
  return (
    <Container fluid className="">
      <Row>
        <Col lg={3}>
          <Sidebar />
        </Col>
        <Col lg={9}>{children}</Col>
      </Row>
    </Container>
  );
};

export default AdminTemplate;
