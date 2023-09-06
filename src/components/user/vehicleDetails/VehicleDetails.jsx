import React from "react";
import "./vehicleDetails.scss";
import { Col, Container, Row } from "react-bootstrap";
import deneme from "../../../assets/img/log.png";
import { AiFillCar, AiOutlineCar } from "react-icons/ai";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { RiCaravanLine } from "react-icons/ri";
import { GiGearStick } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import Spacer from "../../common/spacer/Spacer";
import BookingForm from "./Booking";
const VehicleDetails = () => {
  return (
    <Container className="vehicle-details">
      <div className="vehicle-name">
        <h2>WV Polo</h2>
        <h3>$12/Hour</h3>
      </div>
      <div className="details">
        <Row>
          <Col md={5}>
            <img
              src={deneme}
              alt="Vehicle Detail image"
              className="img-fluid"
            />
          </Col>
          <Col className="vehicle-details" md={7}>
            <h4>Property Highlights</h4>
            <div>
              <Row>
                <Col>
                  <AiFillCar /> Wolksvagen Polo
                </Col>
                <Col>
                  <AiOutlineCar /> Doors: 4
                </Col>
                <Col>
                  <MdAirlineSeatReclineNormal /> Seats: 5
                </Col>
                <Col>
                  <RiCaravanLine /> Luggage: 312
                </Col>
              </Row>
              <Row>
                <Col>
                  <GiGearStick /> Gear: Manuel
                </Col>
                <Col>
                  <TbAirConditioning /> Air Condition
                </Col>
                <Col>
                  <BsFillFuelPumpFill /> Fuel Type: Diesel
                </Col>
                <Col>
                  <FaBirthdayCake /> Age: 2
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <Spacer height={30} />
      <BookingForm />
    </Container>
  );
};

export default VehicleDetails;
