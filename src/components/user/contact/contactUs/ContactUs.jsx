import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { settings } from "../../../../helpers/Settings";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";
import { BiSolidPhoneCall } from "react-icons/bi";
import "./contactUs.scss";
import ContactForm from "./ContactForm";
const ContactUs = () => {
  return (
    <Container>
      <div className="btn-call">
        <a href={`tel:${settings.phone1}`}>
          <BiSolidPhoneCall /> Do You Need Support?
        </a>
      </div>
      <Row>
        <Col md={6} className="contact-form">
          <ContactForm />
        </Col>
        <Col md={6}>
          <div className="contact-info">
            <div className="head">
              <MdLocationOn />
              <div className="content">
                <h3>Head Office</h3>
                <p>{settings.address}</p>
              </div>
            </div>

            <div className="head">
              <MdLocationOn />
              <div className="content">
                <h3>Branch Office</h3>
                <p>{settings.address}</p>
              </div>
            </div>

            <div className="head">
              <MdEmail />
              <div className="content">
                <h3>Customer Service</h3>
                <p>{settings.CustomerEmail}</p>
              </div>
            </div>

            <div className="head">
              <MdEmail />
              <div className="content">
                <h3>Return & Refund</h3>
                <p>{settings.email}</p>
              </div>
            </div>
            <div className="social-media">
              <a href="https://facebook.com" target="_blank">
                <SlSocialFacebook />
              </a>
              <a href="https://instagram.com" target="_blank">
                <SlSocialInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <SlSocialLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank">
                <SlSocialTwitter />
              </a>
              <a href="https://youtube.com" target="_blank">
                <SlSocialYoutube />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
