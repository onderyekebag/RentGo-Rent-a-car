import axios from "axios";
import { settings } from "../helpers/Settings";

const API_URL = settings.apiURL;

export const register = (user) => {
  return axios.post(`${API_URL}/register`, user);
};
export const login = (credential) => {
  return axios.post(`${API_URL}/login`, credential);
};
