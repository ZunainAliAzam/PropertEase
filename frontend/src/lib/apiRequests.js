import axios from "axios";

const apiRequests = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
});

export default apiRequests;
