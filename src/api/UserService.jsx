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
