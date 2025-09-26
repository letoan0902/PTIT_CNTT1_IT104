import axios from "axios";

export const taskAPI = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
