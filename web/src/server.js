import axios from "axios";
import store from "store";

const server = axios.create({
  baseURL: "http://localhost:8000",
});

server.interceptors.request.use(config => {
  config.headers.Authorization = store.get("Authorization");
  return config;
});

export default server;
