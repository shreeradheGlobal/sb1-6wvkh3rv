import axios from 'axios';

// Create axios instance with base URL
export const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    'https://sb16wvkh3rv-l5yu--5000--d20a0a75.local-credentialless.webcontainer.io/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
