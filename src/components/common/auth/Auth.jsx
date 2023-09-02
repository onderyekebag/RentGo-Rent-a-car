import React from "react";
import { Container } from "react-bootstrap";
import "./auth.scss";
import Login from "./Login";
import { Link, useLocation } from "react-router-dom";
import Register from "./Register";
import { MdArrowBack } from "react-icons/md";
const Auth = () => {
  const location = useLocation();

  return (
    <div className="auth">
      <div className="auth-navigate">
        <Link to="/">
          <MdArrowBack />
          Home
        </Link>
      </div>

      {location.pathname === "/auth" && (
        <div className="card">
          <h1>Login</h1>
          <Login />
        </div>
      )}
      {location.pathname === "/auth/register" && (
        <div className="card-register">
          <h1>Register</h1>
          <Register />
        </div>
      )}
    </div>
  );
};

export default Auth;
