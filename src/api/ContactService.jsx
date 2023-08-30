import axios from "axios";
import { settings } from "../helpers/Settings";

const API_URL = settings.apiURL;
const sendMessage = (message) => {
  axios.post(`${API_URL}/contactmessage/visitors`, message);
};
