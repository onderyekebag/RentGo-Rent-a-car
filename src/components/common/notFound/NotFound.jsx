import React from "react";
import "./notFound.scss";
import { GiCarWheel } from "react-icons/gi";
const NotFound = ({ ops, desc }) => {
  return (
    <div className="not-found">
      <h1>
        4<GiCarWheel />
        {ops}
      </h1>
      <p>{desc}</p>
    </div>
  );
};

export default NotFound;
