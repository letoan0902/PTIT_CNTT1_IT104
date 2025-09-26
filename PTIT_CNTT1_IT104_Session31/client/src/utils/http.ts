import axios from "axios";

export const postAPI = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
