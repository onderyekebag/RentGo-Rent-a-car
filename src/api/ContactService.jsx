import axios from "axios";
import { settings } from "../helpers/Settings";
import authHeader from "../helpers/functions/AuthHeader";

const API_URL = settings.apiURL;
export const sendMessage = (message) => {
  return axios.post(`${API_URL}/contactmessage/visitors`, message);
};

export const getMessagesByPage = (
  page = 0,
  size = 20,
  sort = "id",
  direction = "DESC"
) => {
  return axios.get(
    `${API_URL}/contactmessage/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    { headers: authHeader() }
  );
};
