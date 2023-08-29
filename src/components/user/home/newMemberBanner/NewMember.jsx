import React from "react";
import "./newMember.scss";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const NewMember = () => {
  return (
    <Container>
      <div className="bg-banner">
        <h1>50% OFF</h1>
        <h3>SPECIAL OFFER FOR NEW MEMBERS</h3>
        <p>Only for Sunday from 1st Jan to 30th Jan 2045</p>
        <Button as={Link} to="/auth">
          Register Now
        </Button>
      </div>
    </Container>
  );
};

export default NewMember;
