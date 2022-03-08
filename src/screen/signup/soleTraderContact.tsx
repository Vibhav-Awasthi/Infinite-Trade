import React from "react";
import ImageContainer from "../../components/ImageContainer";
import Schema from "../../schema";
import InputField from "../../components/inputfield";
import Utils from "../../Utils";

import { ActiveButton } from "../../components/styledComponents/auth/signIn";

import { Link } from "react-router-dom";
import { useStyles } from "./style";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form } from "formik";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LocalImages from "../../Utils/images";

const SoleTraderContact = () => {
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
                Your Contact Details
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
                How can your clients contact you?
              </Typography>
            </div>
          </Box>
          <Formik
            initialValues={{
              PhoneNumber: "",
            }}
            validationSchema={Schema.MobileNumber()}
            onSubmit={(value, { setSubmitting }) => {
              // dispatch(login(value, history, setSubmitting, rememberMe));
            }}
          >
            <Form>
              <div className={classes.lables}>
                <Typography>Mobile Number</Typography>
              </div>
              <div className={classes.inputField}>
                <InputField
                  placeholder="Enter your mobile number"
                  name="phone_number"
                  type={"number"}
                />
              </div>

              <ActiveButton
                className={classes.activeButton}
                sx={{ color: "#fff" }}
                type="submit"
                variant="contained"
              >
                Save & Continue
              </ActiveButton>
            </Form>
          </Formik>
        </div>
      </HelmetProvider>
    </>
  );
};

export default SoleTraderContact;
