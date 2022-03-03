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

  const Schema={
      LoginSchema,
  } 

  export default Schema;