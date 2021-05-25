import axios from "axios";

axios.interceptors.request.use(
  config => {
    config.baseURL = "/api";
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => Promise.reject(err)
);

axios.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err.response.data)
);

export const lazyRequest = (request, delay = 1000) => {
  const promise = new Promise(resolve => {
    setTimeout(resolve, delay);
  });
  return Promise.all([request, promise]);
};

export default axios;
