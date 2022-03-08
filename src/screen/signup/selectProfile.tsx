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

const Verify = () => {
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
                Are you...
              </Typography>
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
                Please select one of the options
              </Typography>
            </div>
            {/* <div className={classes.verifyTitle}>
             
            </div> */}
            <div className={classes.buttonContainer}>
              <ActiveButton
                className={classes.activeButton}
                sx={{ color: "black", textDecoration: "none", width:"40%", border:"1px solid black", backgroundColor:"#fff" }}
                type="submit"
                variant="contained"
              >
                <Typography className={classes.lables}>
                  Sole Trader
                </Typography>
              </ActiveButton>
              <ActiveButton
                className={classes.activeButton}
                sx={{ color: "#fff", textDecoration: "none",width:"40%" }}
                type="submit"
                variant="contained"
              >
                <Typography className={classes.lables}>
                  {/* Login */}
                  Company
                </Typography>
              </ActiveButton>
            </div>
            <ActiveButton
                  className={classes.activeButton}
                  sx={{ color: "#fff", textDecoration: "none" }}
                  type="submit"
                  variant="contained"
                >
                  <Typography className={classes.lables}>
                    Save & Continue
                  </Typography>
                </ActiveButton>
          </Box>
        </div>
      </HelmetProvider>
    </>
  );
};

export default Verify;
