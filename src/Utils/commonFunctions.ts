const collectClass = (multiClass: [string]) => {
  let makeClass = "";
  multiClass?.forEach((cls: string) => makeClass + cls + " ");
  return makeClass;
};

const setLocalStorage = (data: any) => {
  const { accessToken, email, name, userId, isEmailVerified } = data;
  const accToken = localStorage.getItem("accessToken");
  const user_email = localStorage.getItem("user_email");
  const user_id = localStorage.getItem("user_id");
  const user_name = localStorage.getItem("user_name");
  const user_isEmailVerified = localStorage.getItem("user_isEmailVerified");

  // console.log(accessToken, email, name, userId, isEmailVerified, accToken,
  //   user_email,
  //   user_id,
  //   user_name,
  //   user_isEmailVerified)

  if (!accToken) {
    localStorage.setItem("accessToken", accessToken);
  }
  if (!user_email) {
    localStorage.setItem("user_email", email);
  }
  if (!user_id) {
    localStorage.setItem("user_id", userId);
  }
  if (!user_name) {
    localStorage.setItem("user_name", name);
  }
  if (!user_isEmailVerified) {
    localStorage.setItem("user_isEmailVerified", isEmailVerified);
  }

}

const CommonFunction = {
  collectClass,
  setLocalStorage
};

export default CommonFunction;
