import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <div>
      <Button className="btn-login" as={Link} to="/auth">
        Login
      </Button>
      <Button className="btn-register" as={Link} to="/auth/register">
        Register
      </Button>
    </div>
  );
};

export default UserMenu;
