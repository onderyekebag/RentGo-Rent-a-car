import React from "react";
import { settings } from "../../../helpers/Settings";
import { GiJoystick } from "react-icons/gi";
import { RiGasStationFill, RiCarLine } from "react-icons/ri";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./vehicle.scss";
const VehicleCard = (props) => {
  const { id, image, model, transmission, fuelType, doors, seats } = props;
  return (
    <div className="vehicle-card">
      <div className="rent-item mb-4">
        <img
          className="img-fluid"
          src={`${settings.apiURL}/files/display/${image}`}
          alt={`${settings.siteName}`}
        />
        <h4>{model}</h4>
        <div className="details d-flex justify-content-center">
          <div className="px-2">
            <GiJoystick />
            <span>{transmission}</span>
          </div>
          <div className="px-2">
            <RiGasStationFill />
            <span>{fuelType}</span>
          </div>
          <div className="px-2">
            <RiCarLine />
            <span>{doors} Doors</span>
          </div>
          <div className="px-2">
            <MdOutlineAirlineSeatReclineExtra />
            <span>{seats} Seats</span>
          </div>
        </div>
        <Button
          variant="secondary"
          className="w-50 mt-4"
          as={Link}
          to={`/vehicles/${id}`}
        >
          Rent Now
        </Button>
      </div>
    </div>
  );
};

export default VehicleCard;
