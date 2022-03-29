import Utils from "../../Utils/index";
import {
  LoginModel,
  ForgotPasswordModel,
  ResetPasswordModel,
} from "../../model/index";
export const logInReducer = (
  state: LoginModel = new LoginModel(),
  action: any
) => {
  switch (action.type) {
    case Utils.ActionName.LOGIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export const forgotPasswordReducer = (
  state: ForgotPasswordModel = new ForgotPasswordModel(),
  action: any
) => {
  switch (action.type) {
    case Utils.ActionName.FORGOT_PASSWORD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export const resetPasswordReducer = (
  state: ResetPasswordModel = new ResetPasswordModel(),
  action: any
) => {
  switch (action.type) {
    case Utils.ActionName.RESET_PASSWORD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
