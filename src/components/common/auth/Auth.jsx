import React from "react";
import { Container } from "react-bootstrap";
import "./auth.scss";
import Login from "./Login";
const Auth = () => {
  return (
    <div className="auth">
      <div className="card">
        <Login />
      </div>
    </div>
  );
};

export default Auth;
