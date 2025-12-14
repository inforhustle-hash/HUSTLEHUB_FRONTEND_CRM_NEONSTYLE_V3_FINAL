import axios from "axios";

const API = axios.create({
  baseURL: "https://hustlehub-backend-crm-neonstyle-v3-final.onrender.com"
});

export default API;
