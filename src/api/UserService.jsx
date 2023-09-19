import axios from "axios";
import { settings } from "../helpers/Settings";
import authHeader from "../helpers/functions/AuthHeader";

const API_URL = settings.apiURL;

//? Register Service

export const register = (user) => {
  return axios.post(`${API_URL}/register`, user);
};

//? Login Service
export const login = (credential) => {
  return axios.post(`${API_URL}/login`, credential);
};

//? User Service
export const getUser = () => {
  return axios.get(`${API_URL}/user`, { headers: authHeader() });
};
export const updateUser = (user) => {
  return axios.put(`${API_URL}/user`, user, { headers: authHeader() });
};
export const updatePassword = (credential) => {
  return axios.patch(`${API_URL}/user/auth`, credential, {
    headers: authHeader(),
  });
};

//! Admin endpoints

export const getUserByPage = (
  page = 0,
  size = 10,
  sort = "id",
  direction = "DESC"
) => {
  return axios.get(
    `${API_URL}/user/auth/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    { headers: authHeader() }
  );
};

export const downloadUsers = () => {
  return axios.get(`${API_URL}/excel/download/users`, {
    headers: {
      ...authHeader(),
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    responseType: "blob",
  });
};

export const getUserById = (id) => {
  return axios.get(`${API_URL}/user/${id}/auth`, { headers: authHeader() });
};

export const deleteUserById = (id) => {
  return axios.delete(`${API_URL}/user/${id}/auth`, { headers: authHeader() });
};

export const updateUserById = (id, user) => {
  return axios.put(`${API_URL}/user/${id}/auth`, { headers: authHeader() });
};
