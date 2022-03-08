import React from "react";
import ImageContainer from "../../components/ImageContainer";
import Schema from "../../schema";
import InputField from "../../components/inputfield";
import Utils from "../../Utils";

import {
  HeadingText,
  ActiveButton,
  InnerMainDiv,
  SmallText,
} from "../../components/styledComponents/auth/signIn";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./style";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { InputAdornment } from "@mui/material";
import { Formik, Form } from "formik";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LocalImages from "../../Utils/images";

const Login = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const { collectClass } = Utils.CommonFunctions;

  return (
    <>
      <HelmetProvider>
        <div className={classes.loginContainer}>
          <Box className={classes.titleContainer}>
            <ImageContainer
              style={classes.brandLogo}
              imgUrl={LocalImages.Logo}
            />
            <div className={classes.title}>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  lineHeight: "normal",
                  letterSpacing: "normal",
                  color: "#4f4f4f",
                  float: "left",
                  marginTop: "4%",
                  [theme.breakpoints.down(1025)]: {
                    fontSize: "20px",
                    marginLeft: "2%",
                    marginTop: "4%",
                  },
                }}
              >
                Log In To Infinite Trades
              </Typography>
            </div>
          </Box>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Schema.LoginSchema()}
            onSubmit={(value, { setSubmitting }) => {
              // dispatch(login(value, history, setSubmitting, rememberMe));
            }}
          >
            <Form>
              <div className={classes.lables}>
                <Typography>EMAIL ADDRESS*</Typography>
              </div>
              <div className={classes.inputField}>
                <InputField
                  placeholder="Enter Email Address"
                  name="email"
                  type={"email"}
                  // touched={touched}
                  // errors={errors}</Form>
                />
              </div>
              <div className={classes.forgotPassword}>
                <Typography className={classes.lables}>PASSWORD*</Typography>
                <Typography
                  className={classes.lables}
                  sx={{ color: "#686c6e" }}
                >
                  <Link to={Utils.Pathname.FORGOT_PASSWORD}>
                    Forgot Password?
                  </Link>
                </Typography>
              </div>
              <div className={classes.inputField}>
                <InputField
                  className={collectClass([classes.endIconContainer])}
                  placeholder="Enter Your Password"
                  name="password"
                  type={!isPasswordVisible ? "password" : "text"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography
                          component={"span"}
                          onClick={() => setPasswordVisible(!isPasswordVisible)}
                        >
                          {isPasswordVisible ? "Hide" : "Show"}
                        </Typography>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <ActiveButton
                className={classes.activeButton}
                sx={{ color: "#fff" }}
                type="submit"
                variant="contained"
              >
                Login
              </ActiveButton>
              <Typography
                className={classes.dontHaveAccount}
                sx={{ color: "#686c6e", marginTop: "5%" }}
              >
                Don't have an account?
                <b>
                  <Link to={Utils.Pathname.SIGNUP}>Signup</Link>
                </b>
              </Typography>
            </Form>
          </Formik>
        </div>
      </HelmetProvider>
    </>
  );
};

export default Login;
