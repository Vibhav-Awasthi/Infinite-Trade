import Utils from ".";
import { api_error_code } from "./constants";

// const { checkUserValidation } = Utils.Session;
const StatusCode = api_error_code;

export const checkUserValidation = (data: any) => {
  if (data && data.statusCode) {
    const { statusCode: stc } = data;
    return (
      stc === StatusCode.sessionExpired ||
      stc === StatusCode.unauthorized ||
      stc === StatusCode.accessDenied
    );
  }
  return false;
};

const getApiCall = (
  endPoint: string,
  params: string = "",
  successCallback: Function,
  errorCallback: Function
) => {
  console.log({ endPoint, params });

  Utils.Constants.Session.setAuthorizationToken(
    localStorage.getItem("access_token")
  );

  Utils.Constants.axios
    .get(Utils.Constants.apiUrl + endPoint + params, {})
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === "ECONNABORTED") {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.response && !checkUserValidation(err.response.data)) {
        errorCallback(err.message);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        });
      }
    });
};

const postApiCall = (
  endPoint: string,
  params: string | { [key: string]: any } = "",
  successCallback: Function,
  errorCallback: Function
) => {
  console.log({ endPoint, params });

  Utils.Constants.Session.setAuthorizationToken(
    localStorage.getItem("access_token")
  );

  Utils.Constants.axios
    .post(Utils.Constants.apiUrl + endPoint, params)
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === "ECONNABORTED") {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.response && !checkUserValidation(err.response.data)) {
        errorCallback(err.message);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        });
      }
    });
};

const putApiCall = (
  endPoint: string,
  params: string | { [key: string]: any } = "",
  successCallback: Function,
  errorCallback: Function
) => {
  console.log({ endPoint, params });

  Utils.Constants.Session.setAuthorizationToken(
    localStorage.getItem("access_token")
  );

  Utils.Constants.axios
    .put(Utils.Constants.apiUrl + endPoint + params, {})
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === "ECONNABORTED") {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.response && !checkUserValidation(err.response.data)) {
        errorCallback(err.message);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        });
      }
    });
};

const patchApiCall = (
  endPoint: string,
  params: string = "",
  successCallback: Function,
  errorCallback: Function
) => {
  console.log({ endPoint, params });

  Utils.Constants.Session.setAuthorizationToken(
    localStorage.getItem("access_token")
  );

  Utils.Constants.axios
    .patch(Utils.Constants.apiUrl + endPoint + params, {})
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === "ECONNABORTED") {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.response && !checkUserValidation(err.response.data)) {
        errorCallback(err.message);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        });
      }
    });
};

const deleteApiCall = (
  endPoint: string,
  params: string = "",
  successCallback: Function,
  errorCallback: Function
) => {
  console.log({ endPoint, params });

  Utils.Constants.Session.setAuthorizationToken(
    localStorage.getItem("access_token")
  );

  Utils.Constants.axios
    .delete(Utils.Constants.apiUrl + endPoint + params, {})
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === "ECONNABORTED") {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.response && !checkUserValidation(err.response.data)) {
        errorCallback(err.message);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        });
      }
    });
};

const API = {
  getApiCall,
  postApiCall,
  putApiCall,
  patchApiCall,
  deleteApiCall,
};

export default API;
