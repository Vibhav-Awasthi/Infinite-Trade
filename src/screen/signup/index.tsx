import React from "react";
import ImageContainer from "../../components/ImageContainer";
import Schema from "../../schema";
import InputField from "../../components/inputfield";
// import { Checkbox } from "@mui/material";
import Utils from "../../Utils";

import {
  // HeadingText,
  ActiveButton,
  // InnerMainDiv,
  // SmallText,
} from "../../components/styledComponents/auth/signIn";
// import ActiveButton from "../../components/button";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useStyles } from "./style";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form } from "formik";
import { FormControlLabel } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import LocalImages from "../../Utils/images";
import { signUp } from "./actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Signup = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const { collectClass } = Utils.CommonFunctions;
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <>
      <HelmetProvider>
        <div className={classes.loginContainer}>
        <div>
            <Typography sx={{ ml: "90%", fontWeight: "500", color: "#BDBDBD" }}>
              01/04
            </Typography>
            <div className={classes.details}>
            <Typography sx={{ fontWeight: "600", color: "#828282"}}>
              Account Info
            </Typography>
            </div>
          </div>
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
                  marginTop: "2% !important",
                  marginBottom: "8% !important",
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
              name: "",
              email: "",
              password: "",
              checked: false,
            }}
            validationSchema={Schema.SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(signUp(values, setSubmitting, history));
              // console.log(values);
            }}
          >
            <Form autoComplete="new">
              <div className={classes.lables}>
                <Typography>YOUR FULL NAME*</Typography>
              </div>
              <div className={classes.inputField}>
                <InputField
                  placeholder="Enter your name"
                  name="name"
                  type={"text"}
                />
              </div>
              <div className={classes.lables}>
                <Typography>EMAIL ADDRESS*</Typography>
              </div>
              <div className={classes.inputField}>
                <InputField
                  placeholder="Enter email address"
                  name="email"
                  type={"text"}
                />
              </div>
              <div className={classes.lables}>
                <Typography>PASSWORD*</Typography>
                <Typography className={classes.lables}></Typography>
              </div>
              <div className={classes.inputField}>
                <InputField
                  className={collectClass([classes.endIconContainer])}
                  placeholder="Enter your password"
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
              <div className={classes.checkBoxContainer}>
                <FormControlLabel
                  control={
                    <Checkbox name="checked" className={classes.ckBox} />
                  }
                  label={
                    <React.Fragment>
                      <div
                        style={{
                          textAlign: "left",
                          fontSize: 14,
                          marginTop: "1px",
                        }}
                      >
                        I agree to terms & conditions.
                      </div>
                    </React.Fragment>
                  }
                  className={classes.checkBox}
                  sx={{
                    background: " #FFFFFF",
                    marginTop: "0px",
                    color: theme.palette.secondary.light,
                  }}
                />
              </div>

              <ActiveButton
                className={classes.activeButton}
                sx={{ color: "#fff", textDecoration: "none", textTransform:"capitalize" }}
                variant="contained"
                type={"submit"}
                onClick={() => history.push(Utils.Pathname.VERIFY)}
              >
                <Typography className={classes.lables}>
                  Register Account
                </Typography>
              </ActiveButton>

              <Typography
                className={classes.dontHaveAccount}
                sx={{ color: "#686c6e", marginTop: "5%" }}
              >
                Already have an account?
                <b>
                  <Link to={Utils.Pathname.LOGIN}> Login</Link>{" "}
                </b>
              </Typography>
            </Form>
          </Formik>
        </div>
      </HelmetProvider>
    </>
  );
};

export default Signup;
