import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import VehicleCard from "./VehicleCard";
import { getVehicles } from "../../../api/VehcileServise";
import Loading from "../../common/loading/Loading";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadData = async () => {
    try {
      const resp = await getVehicles();
      setVehicles(resp.data);
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
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <Row className="g-4">
          {vehicles.map((vehicle) => (
            <Col key={vehicle.id} md={6} lg={4}>
              <VehicleCard {...vehicle} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Vehicles;
