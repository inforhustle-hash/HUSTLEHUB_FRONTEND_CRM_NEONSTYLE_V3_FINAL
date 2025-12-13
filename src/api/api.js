import axios from "axios";

const API = axios.create({
  baseURL: "https://hustlehub-backend-crm-neonstyle-v3-final.onrender.com/api"
});

API.interceptors.request.use((config) => {
  const data = localStorage.getItem("hustlehub_user");
  if (data) {
    const token = JSON.parse(data).token;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
