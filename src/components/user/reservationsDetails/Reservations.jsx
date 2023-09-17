import React, { useEffect, useState } from "react";
import { Container, Pagination, Row, Spinner, Table } from "react-bootstrap";
import { getReservations } from "../../../api/ReservationService";
import { formatDateTime } from "../../../helpers/functions/DateTime";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
  const [loading, setloading] = useState(true);
  const [reservations, setReservations] = useState([]);
  const [paging, setPaging] = useState({});
  const navigate = useNavigate();
  const loadData = async (page) => {
    try {
      const resp = await getReservations(page);
      const { content, totalPages, pageable } = resp.data;
      setPaging({ totalPages, pageNumber: pageable.pageNumber });
      setReservations(content);
    } catch (err) {
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    loadData(0);
  }, []);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Vehicle</th>
            <th>Pickup</th>
            <th>Dropoff</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={4} className="text-center">
                <Spinner animation="border" size="sm" />
              </td>
            </tr>
          )}

          {reservations.map((item, index) => (
            <tr
              key={index}
              onClick={() => navigate(`/user/reservations/${item.id}`)}
              style={{ cursor: "pointer" }}
            >
              <td>{index + 1}</td>
              <td>{item.car.model}</td>
              <td>
                {item.pickUpLocation}, {formatDateTime(item.pickUpTime)}
              </td>
              <td>
                {item.dropOffLocation}, {formatDateTime(item.dropOffTime)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
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
    </Container>
  );
};

export default Reservations;
