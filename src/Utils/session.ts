import Utils from ".";

export const setAuthorizationToken = (token: string) => {
  if (token) {
    Utils.Constants.axios.defaults.headers.common["Authorization"] = `${token}`;
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
