import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://195.19.55.234:8000",
});