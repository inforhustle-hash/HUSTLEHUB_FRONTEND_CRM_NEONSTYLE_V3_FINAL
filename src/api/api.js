import axios from 'axios';
const API=axios.create({ baseURL:'https://hustlehub-backend-full-restore-render-1.onrender.com/api' });
API.interceptors.request.use(config=>{ const u=localStorage.getItem('hustlehub_user'); if(u){config.headers.Authorization='Bearer '+JSON.parse(u).token;} return config;});
export default API;