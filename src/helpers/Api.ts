import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";
const API_URL_USERS = `${API_URL}/users`;

export const getUsers = () => {
  return axios.get(`${API_URL_USERS}`);
};

export const getUserPosts = (id: number) => {
  return axios.get(`${API_URL_USERS}/${id}/posts`);
};

export const getUserAlbums = (id: number) => {
  return axios.get(`${API_URL_USERS}/${id}/albums`);
};

export const searchByUserName = (searchQuery: string) => {
  return axios.get(`${API_URL_USERS}?username=${searchQuery}`);
};
