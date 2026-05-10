import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9094"
});

export default API;