import React from "react";
import "./welcomeRent.scss";
import about from "../../../../assets/img/about/about.png";
import { settings } from "../../../../helpers/Settings";
import { Container } from "react-bootstrap";
import Card from "./Card";
const WelcomeRent = () => {
  return (
    <Container>
      <div className="welcome-rent">
        <img src={about} alt={settings.siteName} />
        <p>
          RentGo is here to make traveling easier and more enjoyable. Our
          mission is to make every moment special and to ensure your comfort
          even when you're on the move. Established as of 2023, we strive to
          provide better service every day. Wide Range of Vehicle Options We
          have a diverse fleet of vehicles to meet different needs. Whether it's
          a vacation, business trip, family excursion, or solo adventure, you
          can find the right vehicle for any type of journey. Catering to every
          budget, we offer both economical and luxury options. Reliability and
          Comfort At RentGo, ensuring the safety and comfort of your journeys is
          our top priority. Our vehicles undergo regular maintenance and
          thorough inspections before each trip.
        </p>
      </div>
      <Card />
    </Container>
  );
};

export default WelcomeRent;
