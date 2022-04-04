import Utils from "../../Utils";

export const login = (values: { [key: string]: any }, history: any) => {
  return (dispatch: Function) => {
    if (!navigator.onLine) {
      //check if user is online or not
      // Utils.showAlert(2, 'Please check your internet connection!');
      dispatch({
        type: Utils.ActionName.LOADING,
        payload: false,
      });
      return;
    }

    let dataToSend = {
      ...values,
      deviceId: "3",
      deviceToken: "deviceToken"
    };

    console.log(dataToSend);

    // return;

    Utils.API.postApiCall(
      Utils.endpoint.login,
      dataToSend,
      (respData: any) => {
        let { data } = respData;
        console.log(data);
        if (data.statusCode === Utils.Constants.api_success_code.success) {
          
          Utils.showAlert(1,data.message)
          history.push(Utils.Pathname.Dashboard);

          dispatch({
            type: Utils.ActionName.LOADING,
            payload: false,
          });

        
        } else {
          Utils.showAlert(2,data.message)
          dispatch({ 
            type: Utils.ActionName.LOADING,
            payload: false,
          });
        }
      },
      (error: any) => {
        let { data } = error;
        console.log(data,error);
        Utils.showAlert(2, data.message);
        dispatch({
          type: Utils.ActionName.LOADING,
          payload: false,
        });
      }
    );
  };
};

export const forgotPassword = (
  values: { [key: string]: any },
  history: any
) => {
  return (dispatch: Function) => {
    if (!navigator.onLine) {
      //check if user is online or not
      // Utils.showAlert(2, 'Please check your internet connection!');
      dispatch({
        type: Utils.ActionName.LOADING,
        payload: false,
      });
      return;
    }

    let dataToSend = {
      ...values,
      deviceId: "3",
    };

    console.log(dataToSend);

    // return;

    Utils.API.postApiCall(
      Utils.endpoint.forgotPassword,
      dataToSend,
      (respData: any) => {
        let { data } = respData;

        if (data.statusCode === Utils.Constants.api_success_code.success) {
          console.log(data);

          history.push(Utils.Pathname.Link_SENT);

          dispatch({
            type: Utils.ActionName.LOADING,
            payload: false,
          });

          Utils.showAlert(1, data.message);
        } else {
          dispatch({
            type: Utils.ActionName.LOADING,
            payload: false,
          });
        }
      },
      (error: any) => {
        let { data } = error;
        // console.log(data);
        Utils.showAlert(2, data.message);
        dispatch({
          type: Utils.ActionName.LOADING,
          payload: false,
        });
      }
    );
  };
};

export const resetPassword = (
  values: { [key: string]: any },
  token: string,
  history: any
) => {
  return (dispatch: Function) => {
    if (!navigator.onLine) {
      // check if user is online or not
      Utils.showAlert(2, 'Please check your internet connection!');
      dispatch({
        type: Utils.ActionName.LOADING,
        payload: false,
      });
      return;
    }

    let dataToSend = {
      token: token.split("=")[1],
      newPassword: values.newPassword,
      deviceId: localStorage.getItem("user_id")? localStorage.getItem("user_id") : "3",
    };

    console.log(dataToSend);

    // return;

    Utils.API.postApiCall(
      Utils.endpoint.resetPassword,
      dataToSend,
      (respData: any) => {
        let { data } = respData;

        if (data.statusCode === Utils.Constants.api_success_code.success) {

          history.push(Utils.Pathname.LOGIN);
          Utils.showAlert(1,data.message);
          dispatch({
            type: Utils.ActionName.LOADING,
            payload: false,
          });
        } else {
          dispatch({
            type: Utils.ActionName.LOADING,
            payload: false,
          });
        }
      },
      (error: any) => {
        let { data } = error;
        console.log(data);
        Utils.showAlert(2, data.message);
        dispatch({
          type: Utils.ActionName.LOADING,
          payload: false,
        });
      }
    );
  };
};

export const verifyAccount = () => {
  return (dispatch: Function) => {
    if (!navigator.onLine) {
      //check if user is online or not
      // Utils.showAlert(2, 'Please check your internet connection!');
      dispatch({
        type: Utils.ActionName.LOADING,
        payload: false,
      });
      return;
    }

    let dataToSend = {
      token: localStorage.getItem("verify_account_token") || "",
      deviceId: "3",
      deviceToken: localStorage.getItem("user_id") || "",
    };

    console.log(dataToSend);

    // return;

    Utils.API.postApiCall(
      Utils.endpoint.verify,
      dataToSend,
      (respData: any) => {
        let { data } = respData;
        console.log(data);
        if (data.statusCode === Utils.Constants.api_success_code.success) {
          localStorage.setItem("accessToken", data.data.accessToken);
          dispatch({
            type: Utils.ActionName.LOADING,
            payload: false,
          });

          // Utils.showAlert(1, "Successfully logged in!");
        } else {
          dispatch({
            type: Utils.ActionName.LOADING,
            payload: false,
          });
        }
      },
      (error: any) => {
        let { data } = error;
        console.log(data);
        // Utils.showAlert(2, data.message);
        dispatch({
          type: Utils.ActionName.LOADING,
          payload: false,
        });
      }
    );
  };
};

export const resendMail = () => {
  return (dispatch: Function) => {
    if (!navigator.onLine) {
      //check if user is online or not
      Utils.showAlert(2, 'Please check your internet connection!');
      dispatch({
        type: Utils.ActionName.LOADING,
        payload: false,
      });
      return;
    }

    let dataToSend = {
      email: localStorage.getItem("user_email") || "",
      type: 1,
      deviceId: "string",
      deviceToken: localStorage.getItem("verify_account_token") || "",
    };

    Utils.API.postApiCall(
      Utils.endpoint.resendLink,
      dataToSend,
      (respData: any) => {
        let { data } = respData;

        if (data.statusCode === Utils.Constants.api_success_code.success) {
          dispatch({
            type: Utils.ActionName.LOADING,
            payload: false,
          });

          // Utils.showAlert(1, data.message);
        } else {
          dispatch({
            type: Utils.ActionName.LOADING,
            payload: false,
          });
        }
      },
      (error: any) => {
        let { data } = error;
        // console.log(data);
        Utils.showAlert(2, data.message);
        dispatch({
          type: Utils.ActionName.LOADING,
          payload: false,
        });
      }
    );
  };
};
