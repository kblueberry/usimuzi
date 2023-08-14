import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

export const getUsers = () => {
  return axios.get(`${API_URL}users`);
};
