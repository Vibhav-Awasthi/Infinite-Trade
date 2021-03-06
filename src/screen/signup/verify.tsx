import React from "react";
import ImageContainer from "../../components/ImageContainer";
import Schema from "../../schema";
import InputField from "../../components/inputfield";
import Utils from "../../Utils";

import {
  HeadingText,
  CommonButton,
  InnerMainDiv,
  SmallText,
} from "../../components/styledComponents/auth/signIn";

import { useHistory } from "react-router-dom";
import { useStyles } from "./style";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form } from "formik";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useDispatch } from "react-redux";
import LocalImages from "../../Utils/images";
import NormalButton from "../../components/button/NormalButton";
import { resendMail, verifyAccount } from "./actions";

const Verify = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleResendEmail = () => {
    dispatch(resendMail());
  };

  return (
    <>
      <HelmetProvider>
        <div className={classes.verifyContainer}>
          <Box>
            <div className={classes.titleContainer}>
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
                  Verify your email
                </Typography>
              </div>
              <div className={classes.verifyTitle}>
                <Typography
                  sx={{
                    fontSize: "15px",
                    textAlign: "left",
                    width: "100%",
                    fontStretch: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    color: "#687173",
                    float: "left",
                    marginTop: "2%",
                    marginRight: "10% !important",
                    [theme.breakpoints.down(1025)]: {
                      fontSize: "12px",
                      marginLeft: "2%",
                      marginTop: "4%",
                    },
                  }}
                >
                  Your Account has been successfully registered. Confirm your
                  email address to start using Infinite Trades
                </Typography>
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <CommonButton
                // className={classes.resendMail}
                sx={{
                  color: "black",
                  textDecoration: "none",
                  textTransform: "capitalize",
                  width: "208px",
                  height: "56px",
                  border: "1px solid black",
                  backgroundColor: "#fff",
                  "&:hover": {
                    background: "none",
                  },
                  [theme.breakpoints.down(1025)]: {
                    width: "131px !important",
                    height: "19px"
                  },
                }}
                type="submit"
                variant="contained"
                onClick={handleResendEmail}
              >
                <Typography className={classes.lables} >Resend Email</Typography>
              </CommonButton>
              <CommonButton
                // className={classes.activeButton}
                sx={{
                  color: "#fff", textDecoration: "none",
                   width: "208px", 
                   height: "56px", 
                   textTransform: "capitalize", 
                   [theme.breakpoints.down(1025)]: {
                    width: "131px",
                    height: "19px"
                  },
                }}
                variant="contained"
                onClick={() => history.push(Utils.Pathname.LOGIN)}
              >
                <Typography className={classes.lables}>Login</Typography>
              </CommonButton>
            </div>
          </Box>
        </div>
      </HelmetProvider>
    </>
  );
};

export default Verify;
