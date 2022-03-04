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

import { Link } from "react-router-dom";
import { useStyles } from "./style";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form } from "formik";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LocalImages from "../../Utils/images";

const Signup = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
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
                Create an account
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
                  marginTop: "2%",
                  [theme.breakpoints.down(1025)]: {
                    fontSize: "12px",
                    marginLeft: "2%",
                    marginTop: "4%",
                  },
                }}
              >
                Sign up with your email address to get started.
              </Typography>
            </div>
          </Box>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Schema.SignupSchema()}
            onSubmit={(value, { setSubmitting }) => {
              // dispatch(login(value, history, setSubmitting));
            }}
          >
            <Form>
              <div className={classes.lables}>
                <Typography>Name*</Typography>
              </div>
              <div className={classes.inputField}>
                <InputField
                  placeholder="Enter your name"
                  name="name"
                  type={"name"}
                  // touched={touched}
                  // errors={errors}</Form>
                />
              </div>
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
              <div className={classes.lables}>
                <Typography>PASSWORD*</Typography>
                <Typography className={classes.lables}></Typography>
              </div>
              <div className={classes.inputField}>
                <InputField
                  className={classes.inputField}
                  placeholder="Enter Your Password"
                  name="password"
                  type="password"
                  // touched={touched}
                  // errors={errors}
                />
              </div>
              <Link to={Utils.Pathname.VERIFY}>
                {" "}
                <ActiveButton
                  className={classes.activeButton}
                  sx={{ color: "#fff", textDecoration: "none" }}
                  type="submit"
                  variant="contained"
                >
                  <Typography className={classes.lables}>
                    Register Account
                  </Typography>
                </ActiveButton>
              </Link>

              <Typography sx={{ color: "#686c6e", marginTop: "5%" }}>
                Already have an account?<b> Login </b>
              </Typography>
            </Form>
          </Formik>
        </div>
      </HelmetProvider>
    </>
  );
};

export default Signup;
