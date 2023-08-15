import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

export const getUsers = () => {
  return axios.get(`${API_URL}users`);
};

export const getUserPosts = (id: number) => {
  return axios.get(`${API_URL}users/${id}/posts`);
};

export const getUserAlbums = (id: number) => {
  return axios.get(`${API_URL}users/${id}/albums`);
};
