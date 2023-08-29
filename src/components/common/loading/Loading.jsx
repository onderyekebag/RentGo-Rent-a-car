import React from "react";
import "./loading.scss";
import { Spinner } from "react-bootstrap";
const Loading = () => {
  return (
    <div className="loading">
      <h2>
        Rent<span>Go</span>
      </h2>
      <Spinner animation="border" />
    </div>
  );
};

export default Loading;
