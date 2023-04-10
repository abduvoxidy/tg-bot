import axios from "axios";

export const httpRequestFunction = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FUNCTION_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const errorHandler = (error) => {
  return Promise.reject(error.response);
};

httpRequestFunction.interceptors.response.use(
  (response) => response.data,
  errorHandler
);
