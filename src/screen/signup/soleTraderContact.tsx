import React from "react";
import ImageContainer from "../../components/ImageContainer";
import Schema from "../../schema";
import InputField from "../../components/inputfield";
import Utils from "../../Utils";

import { ActiveButton } from "../../components/styledComponents/auth/signIn";

import { Link,useHistory } from "react-router-dom";
import { useStyles } from "./style";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form } from "formik";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LocalImages from "../../Utils/images";
import { useDispatch } from "react-redux";

const SoleTraderContact = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles({ theme });
  const history = useHistory();
  return (
    <>
      <HelmetProvider>
        <div className={classes.signupContainer}>
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
                  marginTop: "3%",
                  marginBottom:"9%",
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
            validationSchema={Schema.MobileNumber}
            onSubmit={(value) => {
              dispatch({
                type: Utils.ActionName.PROFILESELECTOR,
                payload: { mobileNo: value.PhoneNumber },
              });
              history.push(Utils.Pathname.SOLE_TRADER_DETAILS);
            }}
          >
            <Form>
              <div className={classes.lables}>
                <Typography>Mobile Number</Typography>
              </div>
              <div className={classes.inputField}>
                <InputField
                  placeholder="Enter your mobile number"
                  name="PhoneNumber"
                  type={"number"}
                />
              </div>

              <ActiveButton
                className={classes.activeButton}
                sx={{ color: "#fff",textTransform:"capitalize" }}
                type="submit"
                variant="contained"
                
              >
                Save & Continue
              </ActiveButton>
            </Form>
          </Formik>
        </div>
        <div className={classes.step}>
            <Typography sx={{ mt:"5%" , ml:"32%", fontSize:"12px", fontWeight: "500", color: "#BDBDBD" }}>
              <b>STEP</b> 03/04
            </Typography>
            <div>
            <Typography sx={{fontWeight: "600", fontSize:"14px", color: "#828282"}}>
              Contact Details
            </Typography>
            </div>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default SoleTraderContact;
