import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { GiSandsOfTime } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoCarSportSharp } from "react-icons/io5";
import "./dashboard.scss";
import { getReservationsByPage } from "../../../api/ReservationService";
import { getUserByPage } from "../../../api/UserService";
import { getVehiclesByPage } from "../../../api/VehcileServise";
import { useAppSelector } from "../../../store/Hooks";
import RechartsGraphic from "./RechartsGraphic";
const Dashboard = () => {
  const [users, setUsers] = useState(0);
  const [vehicles, setVehicles] = useState(0);
  const [reservations, setReservations] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const loadData = async () => {
    try {
      const respReser = await getReservationsByPage(0, 500);
      setReservations(respReser.data.totalElements);

      const respUser = await getUserByPage(0, 500);
      setUsers(respUser.data.totalElements);

      const respVehc = await getVehiclesByPage(0, 100);
      setVehicles(respVehc.data.totalElements);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Container className="dashboard">
      <Row className="dashboard-header">
        <Col>
          <div onClick={() => navigate("/user")}>
            {user.firstName} {user.lastName}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            className="dashboard-card"
            onClick={() => navigate("/admin/reservations")}
          >
            <h3>
              <GiSandsOfTime />
              Pending Reservations
            </h3>
            <h1>
              {loading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                reservations
              )}
            </h1>
            <em>Go to reservations</em>
          </div>
        </Col>
        <Col>
          <div
            className="dashboard-card"
            onClick={() => navigate("/admin/users")}
          >
            <h3>
              <FaUsers />
              Current Users
            </h3>
            <h1>
              {loading ? <Spinner animation="border" size="sm" /> : users}
            </h1>
            <em>Go to users</em>
          </div>
        </Col>
        <Col>
          <div
            className="dashboard-card"
            onClick={() => navigate("/admin/vehicles")}
          >
            <h3>
              <IoCarSportSharp />
              Current Vehicles
            </h3>
            <h1>
              {loading ? <Spinner animation="border" size="sm" /> : vehicles}
            </h1>
            <em>Go to vehicles</em>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <div className="bg-dark p-4">
            <RechartsGraphic />
          </div>
        </Col>
        <Col>
          <div className="bg-dark p-4">
            <RechartsGraphic />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
