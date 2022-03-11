import Utils from ".";

// const StatusCode = Utils.Constants.api_error_code;

export const setAuthorizationToken = (token: string | null) => {
  if (token) {
    Utils.Constants.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
  } else {
  }
};

export const getAccessToken = () => {
  let accessToken = sessionStorage.getItem("access_token");
  // if (accessToken) {
  //   setAuthorizationToken(accessToken);
  // }

  return accessToken;
};

export const setAccessToken = (accessToken: any) => {
  if (accessToken) {
    setAuthorizationToken(accessToken);
  }
  return accessToken;
};

// export const checkUserValidation = (data: any) => {
//   if (data && data.statusCode) {
//     const { statusCode: stc } = data;
//     return (
//       stc === StatusCode.sessionExpired ||
//       stc === StatusCode.unauthorized ||
//       stc === StatusCode.accessDenied
//     );
//   }
//   return false;
// };
