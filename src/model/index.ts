class LoadingModel {
    isLoading: boolean = false;
    mainLoading: boolean = false;
  }
  class LoginModel {
    email: string = "";
    password: string = "";
    rememberMe: boolean = false;
  }
  class ForgotPasswordModel {
    email: string = "";
  }
  class ResetPasswordModel {
    resetpassword: string = "";
  }

class ReducersModel{
    globalLoaderReducer: LoadingModel = new LoadingModel();
    logInReducer: LoginModel = new LoginModel();
    forgotPasswordReduce: ForgotPasswordModel = new ForgotPasswordModel();
    resetPasswordReduce: ResetPasswordModel = new ResetPasswordModel();
}

export{
    ReducersModel,
    LoadingModel,
    LoginModel,
    ForgotPasswordModel,
    ResetPasswordModel,
};