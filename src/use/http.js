import axios from "axios";

axios.interceptors.request.use(
  config => {
    config.baseURL = "/api";
    return config;
  },
  err => Promise.reject(err)
);

axios.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err.response.data)
);

export default axios;
