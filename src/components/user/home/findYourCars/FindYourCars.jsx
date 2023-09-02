import React, { useEffect, useState } from "react";
import Loading from "../../../common/loading/Loading";
import { getVehiclesByPage } from "../../../../api/VehcileServise";
import { Col, Container, Row } from "react-bootstrap";
import VehicleCard from "../../vehciles/VehicleCard";

const FindYourCars = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadData = async (page) => {
    try {
      const resp = await getVehiclesByPage(page);
      setVehicles(resp.data.content);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadData(0);
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

export default FindYourCars;
