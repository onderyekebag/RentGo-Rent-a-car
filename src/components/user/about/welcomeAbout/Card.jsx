import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
const Card = () => {
  return (
    <Container className="about-card">
      <Container>
        <Row>
          <Col className="card-left">
            <div className="bg-card">
              <TfiHeadphoneAlt />
            </div>
            <h4>24/7 CAR RENTAL SUPPORT</h4>
          </Col>
          <Col className="card-center">
            <div className="bg-card">
              <AiFillCar />
            </div>
            <h4>CAR RESERVATION ANYTIME</h4>
          </Col>
          <Col className="card-right">
            <div className="bg-card">
              <MdLocationOn />
            </div>
            <h4>LOTS OF PICKUP LOCATIONS</h4>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Card;
