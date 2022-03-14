import axios from "axios";
import moment from "moment-timezone";
import * as Session from "./session";

export const api_error_code = {
  unauthorized: 401,
  accessDenied: 430,
  sessionExpired: 423,
  validationError: 400,
  emailNotVerified: 403,
};

export const api_success_code = {
  success: 200,
};

const $axios = axios.create({
  baseURL: " https://infinitetradestgapi.appskeeper.in",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    platform: "3",
    timezone: moment.tz.guess(),
    api_key: "1234",
    language: "en"
  },
});
const $axios1 = axios.create({
  responseType: "blob",
  baseURL: " https://infinitetradestgapi.appskeeper.in",
  timeout: 30000,
  headers: {
    platform: "3",
    timezone: moment.tz.guess(),
    api_key: "1234",
    language: "en",
  },
});

$axios.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("accessToken")
      ? localStorage.getItem("accessToken")
      : sessionStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    } else {
      config.headers["Authorization"] = "Basic aW5maW5pdGU6aW5maW5pdGVAMTIz";
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

$axios1.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : sessionStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const constants = {
  api_error_code,
  axios: $axios,
  axios1: $axios1,
  apiUrl: " https://infinitetradestgapi.appskeeper.in",
  api_success_code,
  Session: Session,
};
export default constants;
