import React, { useEffect, useState } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import VehicleCard from "./VehicleCard";
import { getVehiclesByPage } from "../../../api/VehcileServise";
import Loading from "../../common/loading/Loading";
import "./vehicles.scss";
const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paging, setPaging] = useState({});
  const loadData = async (page) => {
    try {
      const resp = await getVehiclesByPage(page);
      setVehicles(resp.data.content);
      const { totalPages, pageable } = resp.data;
      setPaging({ totalPages, pageNumber: pageable.pageNumber });
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
    <Container className="vehicles">
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
          {paging.totalPages > 1 && (
            <Row className="mt-5 justify-content-center">
              <Pagination>
                <Pagination.First
                  onClick={() => loadData(0)}
                  disabled={paging.pageNumber <= 0}
                />
                <Pagination.Prev
                  onClick={() => loadData(paging.pageNumber - 1)}
                  disabled={paging.pageNumber <= 0}
                />
                {[...Array(paging.totalPages)].map((item, index) => (
                  <Pagination.Item
                    active={index === paging.pageNumber}
                    key={index}
                    onClick={() => loadData(index)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}

                <Pagination.Next
                  onClick={() => loadData(paging.pageNumber + 1)}
                  disabled={paging.pageNumber >= paging.totalPages - 1}
                />
                <Pagination.Last
                  onClick={() => loadData(paging.totalPages - 1)}
                  disabled={paging.pageNumber >= paging.totalPages - 1}
                />
              </Pagination>
            </Row>
          )}
        </>
      )}
    </Container>
  );
};

export default Vehicles;
