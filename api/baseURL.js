import axios from "axios";
const baseURL = axios.create({
  // baseURL: 'https://admin-client-server.herokuapp.com'
  baseURL: "http://localhost:8080",
});

export default baseURL;
