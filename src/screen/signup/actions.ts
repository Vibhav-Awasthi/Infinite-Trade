import { ResetPasswordModel } from "../../model";
import Utils from "../../Utils";

export const signUp = (values: any, setSubmitting: any, history: any) => {
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
      deviceId: "string",
    };

    delete dataToSend.checked;

    Utils.API.postApiCall(
      Utils.endpoint.signUp,
      dataToSend,
      (respData: any) => {
        let { data } = respData;

        if (data.statusCode === Utils.Constants.api_success_code.success) {
          const { accessToken, email, name, userId } = data.data;

          localStorage.setItem("verify_account_token", accessToken);
          localStorage.setItem("user_email", email);
          localStorage.setItem("user_name", name);
          localStorage.setItem("user_id", userId);

          history.push(Utils.Pathname.VERIFY);

          dispatch({
            type: Utils.ActionName.LOADING,
            payload: false,
          });

          setSubmitting(false);
          // Utils.showAlert(1, "Successfully logged in!");
        } else {
          setSubmitting(false);
          Utils.showAlert(2, data.message);
          // dispatch({
          //   type: Utils.ActionName.SIGNUP,
          //   payload: {
          //     username: "",
          //     password: "",
          //     accountError: data.message,
          //   },
          // });
          dispatch({
            type: Utils.ActionName.LOADING,
            payload: false,
          });
        }
      },
      (error: any) => {
        setSubmitting(false);
        let { data } = error;
        console.log(data);
        // Utils.showAlert(2, data.message);
        // dispatch({
        //   type: Utils.ActionName.SIGNUP,
        //   payload: {
        //     username: "",
        //     password: "",
        //     accountError: data.messa ge,
        //   },
        // });
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
      // Utils.showAlert(2, 'Please check your internet connection!');
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
        // console.log(data);
        // Utils.showAlert(2, data.message);
        dispatch({
          type: Utils.ActionName.LOADING,
          payload: false,
        });
      }
    );
  };
};

export const getSkills = () => {
  return (dispatch: any) => {
    Utils.API.getApiCall(
      Utils.endpoint.skills,
      ``,
      (respData: any) => {
        let { data } = respData;
        if (data.statusCode === 200) {
          console.log(data);
          dispatch({
            type: Utils.ActionName.SKILLS,
            payload: {
              skills: [...data.data.skills],
            },
          });
        }
      },
      (error: any) => {
        let { data } = error;
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

export const soleTraderProfileComplete = (
  values: { [key: string]: any },
  history: any
) => {
  return (dispatch: Function, getState: Function) => {
    if (!navigator.onLine) {
      //check if user is online or not
      // Utils.showAlert(2, 'Please check your internet connection!');
      dispatch({
        type: Utils.ActionName.LOADING,
        payload: false,
      });
      return;
    }

    const { userType, mobileNo } = getState().profileSelectorReducer;

    let location = values.location;
    let valToSend = { ...values };
    delete valToSend.location;
    valToSend.skills = valToSend.skills.map((val: any) => val.TYPE);

    let dataToSend = {
      userType,
      mobileNo: `${mobileNo}`,
      location,
      companySoleTraderDetail: { ...valToSend },
      deviceId: "3",
      deviceToken: localStorage.getItem("user_id") || "",
    };

    // console.log(dataToSend);

    // return;

    Utils.API.putApiCall(
      Utils.endpoint.profileComplete,
      dataToSend,
      (respData: any) => {
        let { data } = respData;

        if (data.statusCode === Utils.Constants.api_success_code.success) {
          dispatch({
            type: Utils.ActionName.LOADING,
            payload: false,
          });
          localStorage.clear();
          history.push(Utils.Pathname.Dashboard);

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
        // console.log(data);
        // Utils.showAlert(2, data.message);
        dispatch({
          type: Utils.ActionName.LOADING,
          payload: false,
        });
      }
    );
  };
};

export const CompanyProfileComplete = (
  values: { [key: string]: any },
  history: any
) => {
  return (dispatch: Function, getState: Function) => {
    if (!navigator.onLine) {
      //check if user is online or not
      // Utils.showAlert(2, 'Please check your internet connection!');
      dispatch({
        type: Utils.ActionName.LOADING,
        payload: false,
      });
      return;
    }

    const { userType, mobileNo, companyDetail } =
      getState().profileSelectorReducer;

    let location = values.location;
    let valToSend = { ...values };
    delete valToSend.location;
    valToSend.availableTrades = valToSend.skills.map((val: any) => val.TYPE);
    delete valToSend.skills;

    let dataToSend = {
      userType,
      mobileNo: `${mobileNo}`,
      location,
      companyDetail: { ...valToSend, ...companyDetail },
      deviceId: "3",
      deviceToken: localStorage.getItem("user_id") || "",
    };

    console.log(dataToSend);

    Utils.API.putApiCall(
      Utils.endpoint.profileComplete,
      dataToSend,
      (respData: any) => {
        let { data } = respData;

        if (data.statusCode === Utils.Constants.api_success_code.success) {
          dispatch({
            type: Utils.ActionName.LOADING,
            payload: false,
          });
          localStorage.clear();
          history.push(Utils.Pathname.Dashboard);
          

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
        // Utils.showAlert(2, data.message);
        dispatch({
          type: Utils.ActionName.LOADING,
          payload: false,
        });
      }
    );
  };
};

// export const addSoleTrader = () => {
//   return (dispatch: Function) => {
//     if (!navigator.onLine) {
//       //check if user is online or not
//       // Utils.showAlert(2, 'Please check your internet connection!');
//       dispatch({
//         type: Utils.ActionName.LOADING,
//         payload: false,
//       });
//       return;
//     }

//     let dataToSend = {
//       email: localStorage.getItem("user_email") || "",
//       type: 1,
//       deviceId: "string",
//       deviceToken: localStorage.getItem("verify_account_token") || "",
//     };

//     Utils.API.postApiCall(
//       Utils.endpoint.resendLink,
//       dataToSend,
//       (respData: any) => {
//         let { data } = respData;

//         if (data.statusCode === Utils.Constants.api_success_code.success) {
//           dispatch({
//             type: Utils.ActionName.LOADING,
//             payload: false,
//           });

//           // Utils.showAlert(1, "Successfully logged in!");
//         } else {
//           dispatch({
//             type: Utils.ActionName.LOADING,
//             payload: false,
//           });
//         }
//       },
//       (error: any) => {
//         let { data } = error;
//         // console.log(data);
//         // Utils.showAlert(2, data.message);
//         dispatch({
//           type: Utils.ActionName.LOADING,
//           payload: false,
//         });
//       }
//     );
//   };
// };
