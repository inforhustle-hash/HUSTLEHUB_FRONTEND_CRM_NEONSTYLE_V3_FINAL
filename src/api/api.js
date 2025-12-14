import axios from "axios";

const API = axios.create({
  baseURL: "https://hustlehub-backend-crm-neonstyle-v3-final.onrender.com/api",
});

// Attach token automatically (if logged in)
API.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem("hustlehub_user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default API;
