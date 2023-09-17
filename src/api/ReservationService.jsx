import axios from "axios";
import { settings } from "../helpers/Settings";
import authHeader from "../helpers/functions/AuthHeader";

const API_URL = settings.apiURL;

export const isVehicleAvailable = (dto) => {
  const { carId, pickUpDateTime, dropOffDateTime } = dto;
  return axios.get(
    `${API_URL}/reservations/auth?carId=${carId}&pickUpDateTime=${pickUpDateTime}&dropOffDateTime=${dropOffDateTime}`,
    { headers: authHeader() }
  );
};

export const createReservation = (carId, reservation) => {
  return axios.post(`${API_URL}/reservations/add?carId=${carId}`, reservation, {
    headers: authHeader(),
  });
};

export const getReservations = (
  page = 0,
  size = 20,
  sort = "pickUpTime",
  direction = "DESC"
) => {
  return axios.get(
    `${API_URL}/reservations/auth/all?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    {
      headers: authHeader(),
    }
  );
};

export const getReservation = (id) => {
  return axios.get(`${API_URL}/reservations/${id}/auth`, {
    headers: authHeader(),
  });
};
