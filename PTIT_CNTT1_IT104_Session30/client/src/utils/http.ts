import axios from "axios";

export const taskAPI = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
