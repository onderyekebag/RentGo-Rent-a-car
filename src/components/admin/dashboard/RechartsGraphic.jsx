//!

/*

This component, since it does not have a counterpart on the backend,
 has been provided with manual and random values.
  Additionally, a primitive month sorting method has been implemented.


*/

//!

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const date = new Date();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var monthNum = date.getMonth();

var month1 = months[monthNum - 3];
var month2 = months[monthNum - 2];
var month3 = months[monthNum - 1];
var month4 = months[monthNum];

console.log(month1);

const data = [
  {
    name: month1,
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: month2,
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: month3,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: month4,
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];
const RechartsGraphic = () => {
  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default RechartsGraphic;
