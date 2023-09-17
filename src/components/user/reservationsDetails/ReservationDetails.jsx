import React, { useEffect, useState } from "react";
import { Accordion, Button, Container, Table } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import "./reservationDetails.scss";
import { getReservation } from "../../../api/ReservationService";
import { settings } from "../../../helpers/Settings";
import { formatDateTime } from "../../../helpers/functions/DateTime";
const ReservationDetails = () => {
  const { reservationId } = useParams();
  const [reservation, setReservation] = useState({});
  const [vehicle, setVehicle] = useState({});
  const loadData = async () => {
    try {
      const resp = await getReservation(reservationId);
      setReservation(resp.data);
      setVehicle(resp.data.car);
      console.log(vehicle.model);
    } catch (err) {}
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container className="reservation-details">
      <div className="head">
        <Button as={Link} to={-1}>
          <IoMdArrowRoundBack /> Back To Reservations
        </Button>
        <h1>{vehicle.model}</h1>
      </div>
      <div className="reservations">
        <div className="img-fluid mt-3">
          <img
            src={`${settings.apiURL}/files/display/${vehicle.image}`}
            alt="image res."
          />
        </div>
        <Accordion defaultActiveKey="0" className="w-100 p-2">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Reservation details</Accordion.Header>
            <Accordion.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Pick-up Location</th>
                    <th>Drop-off Location</th>
                    <th>Pick-up Tİme</th>
                    <th>Drop-off Tİme</th>
                    <th>Status</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{reservation.pickUpLocation}</td>
                    <td>{reservation.dropOffLocation}</td>
                    <td>{formatDateTime(reservation.pickUpTime)}</td>
                    <td>{formatDateTime(reservation.dropOffTime)}</td>
                    <td>{reservation.status}</td>
                    <td>${reservation.totalPrice}</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Vehicle details</Accordion.Header>
            <Accordion.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Doors</th>
                    <th>Seats</th>
                    <th>Luggage</th>
                    <th>Transmission</th>
                    <th>Air con.</th>
                    <th>Fuel Type</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{vehicle.model}</td>
                    <td>{vehicle.doors}</td>
                    <td>{vehicle.seats}</td>
                    <td>{vehicle.luggage}</td>
                    <td>{vehicle.transmission}</td>
                    <td>{vehicle.airConditioning ? "Yes" : "No"}</td>
                    <td>{vehicle.fuelType}</td>
                    <td>{vehicle.age}</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  );
};

export default ReservationDetails;
