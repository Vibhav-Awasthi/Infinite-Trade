import React from "react";
import ImageContainer from "../../components/ImageContainer";
import Schema from "../../schema";
import InputField from "../../components/inputfield";
import Utils from "../../Utils";
import { login } from "./action";

import {
  ActiveButton,
} from "../../components/styledComponents/auth/signIn";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./style";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { InputAdornment } from "@mui/material";
import { Formik, Form } from "formik";
import { HelmetProvider } from "react-helmet-async";
import LocalImages from "../../Utils/images";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const { collectClass } = Utils.CommonFunctions;
  const dispatch = useDispatch();
  const history = useHistory();

  // React.useEffect(() => {

  //   localStorage.clear()

  // }, []);

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
                  fontSize: "24px",
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
                Login to Infinite Trades
              </Typography>
            </div>
          </Box>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Schema.LoginSchema}
            onSubmit={(values) => {
              dispatch(login(values, history));
            }}
          >
            <Form>
              <div className={classes.lables}>
                <Typography sx={{ fontSize: "16px", color: "#424546" }}>EMAIL ADDRESS*</Typography>
              </div>
              <div className={classes.inputField}>
                <InputField
                  placeholder="Enter email Address"
                  name="email"
                  type="text"
                />
              </div>
              <div className={classes.forgotPassword}>
                <Typography className={classes.lables} sx={{ fontSize: "16px", color: "#424546" }}>PASSWORD*</Typography>
                <Typography
                  className={classes.lables}
                  sx={{ color: "#686c6e" }}
                >
                  <Link to={Utils.Pathname.FORGOT_PASSWORD}>
                    FORGOT PASSWORD?
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
                          sx={{ cursor: "pointer" }}
                          component={"span"}
                          onClick={() => setPasswordVisible(!isPasswordVisible)}
                        >
                          {isPasswordVisible ? "HIDE" : "SHOW"}
                        </Typography>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <ActiveButton
                className={classes.activeButton}
                sx={{ color: "#fff", textTransform: "capitalize" }}
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
                  <Link to={Utils.Pathname.SIGNUP}> Signup</Link>
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
