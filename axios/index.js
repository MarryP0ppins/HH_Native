import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.1.68:8000",
  withCredentials: true,
  headers: {
    Cookie: "session_id=53dffc3c-0592-44fd-bfb6-26f91be8b4f2",
  },
});
