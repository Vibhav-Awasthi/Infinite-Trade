import React from "react";
import { useState } from "react";
import ImageContainer from "../../components/ImageContainer";
import Schema from "../../schema";
import InputField from "../../components/inputfield";
import Utils from "../../Utils";

import { ActiveButton } from "../../components/styledComponents/auth/signIn";

import { Link, useHistory } from "react-router-dom";
import { useStyles } from "./style";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form } from "formik";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LocalImages from "../../Utils/images";
import { forgotPassword } from "./action";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const history = useHistory();
  const dispatch = useDispatch();
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
                Forgot Password
              </Typography>
            </div>
            <div className={classes.title}>
              <Typography
                sx={{
                  fontSize: "15px",
                  // fontWeight: "bold",
                  fontStretch: "normal",
                  lineHeight: "normal",
                  letterSpacing: "normal",
                  color: "#687173",
                  float: "left",
                  marginTop: "4%",
                  [theme.breakpoints.down(1025)]: {
                    fontSize: "12px",
                    marginLeft: "2%",
                    marginTop: "4%",
                  },
                }}
              >
                To reset your password, please enter your email address
              </Typography>
            </div>
          </Box>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={Schema.ForgotPassWordSchema}
            onSubmit={(values, { setSubmitting }) => {
              // dispatch(login(value, history, setSubmitting, rememberMe));
              console.log(values);
              dispatch(forgotPassword(values, history));
            }}
          >
            <Form>
              <div className={classes.lables}>
                <Typography>EMAIL ADDRESS</Typography>
              </div>
              <div className={classes.inputField}>
                <InputField
                  placeholder="Enter Email Address"
                  name="email"
                  type={"email"}
                />
              </div>

              <ActiveButton
                className={classes.activeButton}
                sx={{ color: "#fff",textTransform:"capitalize" }}
                variant="contained"
              >
                Send
              </ActiveButton>
            </Form>
          </Formik>
        </div>
      </HelmetProvider>
    </>
  );
};

export default ForgotPassword;
