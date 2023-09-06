import React, { useEffect, useState } from "react";
import "./vehicleDetails.scss";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { AiFillCar, AiOutlineCar } from "react-icons/ai";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { RiCaravanLine } from "react-icons/ri";
import { GiGearStick } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import Spacer from "../../common/spacer/Spacer";
import BookingForm from "./Booking";
import { getVehicle } from "../../../api/VehcileServise";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/Hooks";
import { setVehicle } from "../../../store/slices/ReservationsSlice";
import { settings } from "../../../helpers/Settings";
const VehicleDetails = () => {
  const [loading, setloading] = useState(true);
  const { vehicleId } = useParams();
  const dispatch = useAppDispatch();
  const vehicle = useAppSelector((state) => state.reservation.vehicle);
  const loadData = async () => {
    try {
      const resp = await getVehicle(vehicleId);
      dispatch(setVehicle(resp.data));
    } catch (err) {
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container className="vehicle-details">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="vehicle-name">
            <h2>{vehicle.model}</h2>
            <h3>${vehicle.pricePerHour}/Hour</h3>
          </div>
          <div className="details">
            <Row>
              <Col md={5}>
                <img
                  src={`${settings.apiURL}/files/display/${vehicle.image}`}
                  alt="Vehicle Detail image"
                  className="img-fluid"
                />
              </Col>
              <Col className="vehicle-details" md={7}>
                <h4>Property Highlights</h4>
                <div>
                  <Row>
                    <Col>
                      <AiFillCar /> {vehicle.model}
                    </Col>
                    <Col>
                      <AiOutlineCar /> Doors: {vehicle.doors}
                    </Col>
                    <Col>
                      <MdAirlineSeatReclineNormal /> Seats: {vehicle.seats}
                    </Col>
                    <Col>
                      <RiCaravanLine /> Luggage: {vehicle.luggage}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <GiGearStick /> Gear: {vehicle.transmission}
                    </Col>
                    <Col>
                      <TbAirConditioning /> Air Conditioning :
                      {vehicle.airConditioning ? "Yes" : "No"}
                    </Col>
                    <Col>
                      <BsFillFuelPumpFill /> Fuel Type: {vehicle.fuelType}
                    </Col>
                    <Col>
                      <FaBirthdayCake /> Age: {vehicle.age}
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <Spacer height={30} />
          <BookingForm />
        </>
      )}
    </Container>
  );
};

export default VehicleDetails;
