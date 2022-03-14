import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const LoginSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("Please enter valid email")
      .max(50, "Email can be maximum of hundred characters")
      .required("Email field cannot be blank"),
    password: Yup.string().trim().required("Password field cannot be blank"),
  });
};
const MobileNumber = () => {
  return Yup.object().shape({
    PhoneNumber: Yup.string()
      .required("Please enter your phone number")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "to short")
      .max(10, "to long"),
  });
};
const SignupSchema = () => {
  return Yup.object().shape({
    name: Yup.string()
      .trim()
      .max(100, "Name can be maximum of hundred characters")

      .required("Name field cannot be blank"),
    email: Yup.string()
      .trim()
      .email("Please enter valid email")
      .max(100, "Email can be maximum of hundred characters")

      .required("Email field cannot be blank"),
    password: Yup.string().trim().required("Password field cannot be blank"),
    checked: Yup.boolean().required("Please Mark this box"),
  });
};
const ChangePasswordScheema = () => {
  return Yup.object().shape({
    currentpassword: Yup.string()
      .trim()
      .required("Current Password field cannot be blank"),
    newpassword: Yup.string()
      .trim()
      .min(6, "Password should be minimum of six characters")
      .max(20, "Password should be maximum of twenty characters")

      .required("New Password field cannot be blank")
      .test(
        "notBothAtTheSameTime",
        "Current Password and New Password should not be the same",
        function (newpassword) {
          const { currentpassword } = this.parent;
          if (currentpassword === newpassword) {
            return false;
          }
          return true;
        }
      ),
  });
};

const CompanyContactSchema = () => {
  return Yup.object().shape({
    mobileNo: Yup.string()
      .required("Please enter your phone number")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "to short")
      .max(10, "to long"),
    officeNo: Yup.string()
      .required("Please enter your Office number")
      .matches(phoneRegExp, "Office number is not valid")
      .min(10, "to short")
      .max(10, "to long"),
  });
};

const BusinessDetailSchema = () => {
  return Yup.object().shape({
    name: Yup.string()
      .trim()
      .max(100, "Name can be maximum of hundred characters")

      .required("Name field cannot be blank"),
    phone_number: Yup.string()
      .required("Please enter your phone number")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "Phone number cannot be less than 10 digits"),
    location: Yup.object().required("Please enter the location"),

    checked: Yup.boolean().required("Please Mark this box"),
  });
};

const SoleTraderSchema = () =>
  Yup.object().shape({
    businessName: Yup.string().trim().required("Required"),
    abnNumber: Yup.string()
      .trim()
      .max(10, "Maximum limit is 10 digits")
      .required("Required"),
    location: Yup.object()
      .shape({
        address: Yup.string(),
        coordinates: Yup.array(),
      })
      .required("Location Required"),
    skills: Yup.array().min(1, "Required"),
    industryExp: Yup.number()
      .max(20, "Cannot exceed 20 years of Experience")
      .required("Required"),
  });

const ForgotPassWordSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("Please enter a valid email")
      .required("Email required"),
  });

const ResetPasswordSchema = () =>
  Yup.object().shape({
    newPassword: Yup.string().trim().required("Password filed is required"),
    confirmPassword: Yup.string()
      .trim()
      .required("Password field is required")
      .test(
        "check confirmPassword",
        "Password does not match",
        function (value: any) {
          const { newPassword } = this.parent;
          return value === newPassword;
        }
      ),
  });

const Schema = {
  LoginSchema,
  SignupSchema,
  ChangePasswordScheema,
  CompanyContactSchema,
  MobileNumber,
  BusinessDetailSchema,
  SoleTraderSchema,
  ForgotPassWordSchema,
  ResetPasswordSchema,
};

export default Schema;
