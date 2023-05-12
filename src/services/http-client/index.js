import axios from "axios";

const headerData = {
  Authorization: "API-KEY",
  "X-API-KEY": process.env.NEXT_PUBLIC_X_API_KEY,
  "environment-id": process.env.NEXT_PUBLIC_ENVIRONMENT_ID,
  "resource-id": process.env.NEXT_PUBLIC_RESOURCE_ID,
};

const paramsData = {
  "project-id": process.env.NEXT_PUBLIC_REQUEST_PROJECT_ID,
};

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    ...headerData,
  },
  params: {
    ...paramsData,
  },
});

export const requestAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_URL,
  headers: {
    ...headerData,
  },
  params: {
    ...paramsData,
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

request.interceptors.response.use((response) => response.data, errorHandler);

requestAuth.interceptors.response.use(
  (response) => response.data,
  errorHandler
);
