// frontend/src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

// Add a request interceptor
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) config.headers['x-auth-token'] = token;
    return config;
  },
  error => Promise.reject(error),
);

export default api;
