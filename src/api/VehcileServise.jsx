import axios from "axios";
import { settings } from "../helpers/Settings";
import authHeader from "../helpers/functions/AuthHeader";

const API_URL = settings.apiURL;

export const getVehicles = () => {
  return axios.get(`${API_URL}/car/visitors/all`);
};

export const getVehiclesByPage = (
  page = 0,
  size = 6,
  sort = "model",
  direction = "DESC"
) => {
  return axios.get(
    `${API_URL}/car/visitors/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`
  );
};

export const getVehicle = (id) => {
  return axios.get(`${API_URL}/car/visitors/${id}`);
};

export const downloadVehicles = () => {
  return axios.get(`${API_URL}/excel/download/cars`, {
    headers: {
      ...authHeader(),
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    responseType: "blob",
  });
};

export const uploadVehicleImage = (image) => {
  return axios.post(`${API_URL}/files/upload`, image, {
    headers: { ...authHeader(), "Content-Type": "multipart/form-data" },
  });
};

export const deleteVehicleImage = (imageId) => {
  return axios.delete(`${API_URL}/files/${imageId}`, {
    headers: authHeader(),
  });
};

export const createVehicle = (imageId, vehicle) => {
  return axios.post(`${API_URL}/car/admin/${imageId}/add`, vehicle, {
    headers: authHeader(),
  });
};

export const deleteVehicle = (vehicleId) => {
  return axios.delete(`${API_URL}/car/admin/${vehicleId}/auth`, {
    headers: authHeader(),
  });
};

export const updateVehicle = (vehicleId, imageId, vehicle) => {
  return axios.put(
    `${API_URL}/car/admin/auth?id=${vehicleId}&imageId=${imageId}`,
    vehicle,
    {
      headers: authHeader(),
    }
  );
};
