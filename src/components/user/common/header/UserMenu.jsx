import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonSquare, BsPersonCheckFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../../../store/Hooks";
import { question } from "../../../../helpers/functions/Swal";
import { encryptedLocalStorage } from "../../../../helpers/functions/EncryptStorage";
import { logout } from "../../../../store/slices/AuthSlice";
const UserMenu = () => {
  const [show, setShow] = useState(false);
  const { isUserLogin, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    question("Logout", "Are you sure to logout ?").then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        encryptedLocalStorage.removeItem("token");
        navigate("/");
      }
    });
  };

  return (
    <div className="user-menu">
      {isUserLogin ? (
        <>
          <Button
            variant="secondary"
            onClick={handleShow}
            className="me-2 text-dark"
            style={{ fontSize: "1.1rem", fontWeight: "600" }}
          >
            <BsPersonCheckFill /> | {user.firstName} {user.lastName}
          </Button>
          <Offcanvas show={show} onHide={handleClose} placement={"end"}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Profile Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="profile-image text-center">
                <BsPersonSquare
                  className="mb-3"
                  style={{ fontSize: "5rem", color: "rgba(28, 30, 50, 0.7)" }}
                />
                <h2>
                  {user.firstName} {user.lastName}
                </h2>
                <p>{user.email}</p>
              </div>
              <div className="btn-canvas">
                {user.roles.includes("Administrator") && (
                  <>
                    <Button className="w-100 mb-2" as={Link} to="/admin">
                      Admin Panel
                    </Button>
                    <hr />
                  </>
                )}

                <Button className="w-100 mb-3" as={Link} to="/user">
                  Profile
                </Button>
                <Button
                  className="w-100 mb-3"
                  as={Link}
                  to="/user/reservations"
                >
                  Reservations
                </Button>
                <Button
                  variant="danger"
                  className="w-100 mb-2"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      ) : (
        <>
          <Button className="btn-login" as={Link} to="/auth">
            Login
          </Button>
          <Button className="btn-register" as={Link} to="/auth/register">
            Register
          </Button>
        </>
      )}
    </div>
  );
};

export default UserMenu;
