import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const LoginSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .max(100, "Email can be maximum of hundred characters")
      .trim()
      .required("Email field cannot be blank"),
    password: Yup.string().trim().required("Password field cannot be blank"),
  });
};
const MobileNumber = () => {
  return Yup.object().shape({
    phone_number: Yup.string()
  .required("Please enter your phone number")
  .matches(phoneRegExp, 'Phone number is not valid')
  .min(10, "to short")
  .max(10, "to long"),
  });
};
const SignupSchema = () => {
  return Yup.object().shape({
    name: Yup.string()
      .max(100, "Name can be maximum of hundred characters")
      .trim()
      .required("Name field cannot be blank"),
    email: Yup.string()
      .email("Please enter valid email")
      .max(100, "Email can be maximum of hundred characters")
      .trim()
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
      .min(6, "Password should be minimum of six characters")
      .max(20, "Password should be maximum of twenty characters")
      .trim()
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

const BusinessDetailSchema = () => {
  return Yup.object().shape({
    name: Yup.string()
      .max(100, "Name can be maximum of hundred characters")
      .trim()
      .required("Name field cannot be blank"),
      phone_number: Yup.string()
      .required("Please enter your phone number")
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, "Phone number cannot be less than 10 digits"),
      location: Yup.object()
      .required("Please enter the location"),
    
    checked: Yup.boolean().required("Please Mark this box"),
  });
};

const Schema = {
  LoginSchema,
  SignupSchema,
  ChangePasswordScheema,
  MobileNumber, 
  BusinessDetailSchema
};

export default Schema;
