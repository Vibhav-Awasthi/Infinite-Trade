class LoadingModel {
  isLoading: boolean = false;
  mainLoading: boolean = false;
}
class LoginModel {
  email: string = "";
  password: string = "";
}
class ForgotPasswordModel {
  email: string = "";
}
class ResetPasswordModel {
  token: string = "";
  newPassword: string = "";
  deviceId: string = "";
}

class SignupModel {
  name: string = "";
  email: string = "";
  password: string = "";
}

class ProfileSelectorModel {
  userType: string = "";
  mobileNo: string = "";
  location: { [key: string]: string | [] } | null = null;
  companySoleTraderDetail: {
    [key: string]: any;
  } | null = null;
  companyDetail: { [key: string]: any } | null = null;
}

class DropDownListsModel {
  skills: [] = [];
}

class ReducersModel {
  globalLoaderReducer: LoadingModel = new LoadingModel();
  logInReducer: LoginModel = new LoginModel();
  forgotPasswordReducer: ForgotPasswordModel = new ForgotPasswordModel();
  resetPasswordReducer: ResetPasswordModel = new ResetPasswordModel();
  signUpReducer: SignupModel = new SignupModel();
  profileSelectorReducer: ProfileSelectorModel = new ProfileSelectorModel();
  dropDownReducer: DropDownListsModel =new DropDownListsModel();
}

export {
  ReducersModel,
  LoadingModel,
  LoginModel,
  ForgotPasswordModel,
  ResetPasswordModel,
  SignupModel,
  ProfileSelectorModel,
  DropDownListsModel,
};
