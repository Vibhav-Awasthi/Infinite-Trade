import * as Yup from "yup";
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

const Schema = {
  LoginSchema,
  SignupSchema,
};

export default Schema;
