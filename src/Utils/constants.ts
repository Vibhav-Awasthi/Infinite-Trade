import axios from "axios";
import moment from "moment-timezone";
import { getAccessToken } from "./session";
const api_error_code = {
  unauthorized: 401,
  accessDenied: 430,
  sessionExpired: 423,
  validationError: 400,
  emailNotVerified: 403,
};
const $axios = axios.create({
  baseURL:"https://infinitetradedevapi.appskeeper.in/documentation#/company%2Fsoletrader",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    platform: "3",
    timezone: moment.tz.guess(),
    api_key: "123456",
  },
});
const $axios1 = axios.create({
  responseType: "blob",
  baseURL:"https://infinitetradedevapi.appskeeper.in/documentation#/company%2Fsoletrader",
  timeout: 30000,
  headers: {
    platform: "3",
    timezone: moment.tz.guess(),
    api_key: "123456",
  },
});

$axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : sessionStorage.getItem("access_token");
    // if (token) {
    //   config.headers["Authorization"] = "Bearer " + token;
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
$axios1.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : sessionStorage.getItem("access_token");
    // if (token) {
    //   config.headers["Authorization"] = "Bearer " + token;
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const QuestionStatus = {
  NOT_STARTED: "not_started",
  ATTEMPT: "attempt",
  SKIPED: "skiped",
};

const QuestionType = {
  ESSAY: "essay",
  MULTIPLE_CHOICE: "multiple choice",
};

const constants = {
  QuestionType,
  api_error_code,
  axios: $axios,
  axios1: $axios1,
  getAccessToken,
  QuestionStatus,
  apiUrl:"https://infinitetradedevapi.appskeeper.in/documentation#/company%2Fsoletrader",
 
};
export default constants;
