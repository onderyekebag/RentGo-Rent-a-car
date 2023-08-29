import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.scss";
import { settings } from "../../../../helpers/Settings";
import { MdLocationOn, MdOutlinePrivacyTip } from "react-icons/md";
import {
  AiOutlineHome,
  AiFillCar,
  AiOutlineInfoCircle,
  AiOutlineClockCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xl={3} lg={4} md={6} sm={12}>
            <h2>
              Rent<span>Go</span>
            </h2>
            <p>
              Elevating your journey is our mission. At Rentgo Rent a Car, we
              provide top-notch car rental services. You dream, we deliver. Make
              your reservation now and enjoy a delightful driving experience.
            </p>
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}>
            <h3>Quick links</h3>
            <ul>
              <li>
                <Link to="/">
                  <AiOutlineHome /> Home Page
                </Link>
              </li>
              <li>
                <Link to="/vehicles">
                  <AiFillCar /> Vehciles Page
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <AiOutlineInfoCircle /> About Page
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <TfiHeadphoneAlt /> Contact Page
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy">
                  <MdOutlinePrivacyTip /> Privacy Policy
                </Link>
              </li>
            </ul>
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}>
            <h3>Working Hours</h3>
            <ul>
              <li>
                <AiOutlineClockCircle /> Mon-Fri : 09:00 AM - 09:00 PM
              </li>
              <li>
                <BsClockHistory /> Saturday : 09:00 AM - 07:00 PM
              </li>
              <li>
                <BsClockHistory /> Sunday : 09:00 AM - 05:00 PM
              </li>
            </ul>
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <TfiHeadphoneAlt /> <a href="">{settings.phone1}</a>
              </li>
              <li>
                <MdLocationOn />
                {settings.address}
              </li>
              <li>
                <AiOutlineMail /> {settings.email}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
