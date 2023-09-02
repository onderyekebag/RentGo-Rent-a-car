import React, { useEffect, useState } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import VehicleCard from "./VehicleCard";
import { getVehiclesByPage } from "../../../api/VehcileServise";
import Loading from "../../common/loading/Loading";

const Vehicles = () => {
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
        <>
          <Row className="g-4">
            {vehicles.map((vehicle) => (
              <Col key={vehicle.id} md={6} lg={4}>
                <VehicleCard {...vehicle} />
              </Col>
            ))}
          </Row>
          <Row>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Vehicles;
