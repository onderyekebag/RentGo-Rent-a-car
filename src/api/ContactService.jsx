import axios from "axios";
import { settings } from "../helpers/Settings";

const API_URL = settings.apiURL;
export const sendMessage = (message) => {
  return axios.post(`${API_URL}/contactmessage/visitors`, message);
};
