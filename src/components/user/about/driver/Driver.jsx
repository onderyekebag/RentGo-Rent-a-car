import React from "react";
import "./driver.scss";
import { Button, Container } from "react-bootstrap";
import bannerLeft from "../../../../assets/img/banner/banner-left.png";
import bannerRight from "../../../../assets/img/banner/banner-right.png";
import { Link } from "react-router-dom";
const Driver = () => {
  return (
    <Container className="driver-banner">
      <div className="banner-left">
        <div className="image">
          <img src={bannerLeft} alt="" className="img-fluid" />
        </div>
        <div className="content-left">
          <h3>WANT TO BE DRIVER?</h3>
          <p>
            The aim is to provide both aspiring drivers and current drivers with
            an enjoyable and instructive experience.
          </p>
          <Button as={Link} to="/contact">
            Start Now
          </Button>
        </div>
      </div>
      <div className="banner-right">
        <div className="content-right">
          <h3>LOOKING FOR A CAR?</h3>
          <p>
            A Customized Vehicle Experience: We're Here with You While You
            Search for the Vehicle That Fits Your Needs
          </p>
          <Button as={Link} to="/vehicles">
            Start Now
          </Button>
        </div>
        <div className="image">
          <img src={bannerRight} alt="" className="img-fluid" />
        </div>
      </div>
    </Container>
  );
};

export default Driver;
