import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const getDishes = (category) =>
  API.get(`/dishes${category ? `?category=${encodeURIComponent(category)}` : ""}`);

export const getDishById = (id) => API.get(`/dishes/${id}`);

export default API;