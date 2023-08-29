import React from "react";
import "./team.scss";
import { Card, Col, Container, Row } from "react-bootstrap";
import team1 from "../../../../assets/img/team/team-2.jpg";
import team2 from "../../../../assets/img/team/team-4.jpg";
import team3 from "../../../../assets/img/team/team-1.jpg";
const Team = () => {
  return (
    <Container className="team">
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={team3} />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>CEO ( Chief Executive Officer )</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={team1} />
            <Card.Body>
              <Card.Title>Emily Davis</Card.Title>
              <Card.Text>CMO ( Chief Marketing Officer )</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={team2} />
            <Card.Body>
              <Card.Title>Michael Johnson</Card.Title>
              <Card.Text>CFO ( Chief Financial Officer )</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
