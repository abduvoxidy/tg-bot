import axios from "axios";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: "API-KEY",
    "X-API-KEY": process.env.NEXT_X_API_KEY,
  },
});

const errorHandler = (error) => {
  // if (error && error.response) {
  //   if (error.response.status === 401) {
  //     if (typeof window !== 'undefined') {
  //       if (!window.location.pathname.includes('login')) {
  //         if(window.location.pathname.includes('checkout')){
  //           location.replace('/login?checkout=true');
  //         }
  //         else location.replace('/login');
  //       }
  //     }
  //   }
  // }

  return Promise.reject(error.response);
};

request.interceptors.response.use(
  (response) => response.data.data,
  errorHandler
);
