import axios from "axios";
import { settings } from "../helpers/Settings";

const API_URL = settings.apiURL;
export const getVehicles = () => {
  return axios.get(`${API_URL}/car/visitors/all`);
};

export const getVehiclesByPage = (page, size, sort, direction) => {
  return axios.get(
    `${API_URL}/car/visitors/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`
  );
};
