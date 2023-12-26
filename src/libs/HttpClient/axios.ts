import { default as axiosLib } from "axios";

export const axios = axiosLib.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST || "",
  withCredentials: true,
});

axios.interceptors.request.use(function (config) {
  config.headers.set("Access-Control-Allow-Origin", "*");
  config.headers.set("Content-Type", "application/json");
  config.headers.set("Accept-Version", "v5.0");
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (reject) => {
    if (!reject.response) {
      return Promise.reject(reject);
    }
    return Promise.reject(reject.response);
  },
);
