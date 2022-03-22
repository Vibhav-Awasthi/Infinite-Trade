// import React from "react";
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

import { Link, useHistory } from "react-router-dom";
import { useStyles } from "./style";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form } from "formik";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LocalImages from "../../Utils/images";
import NormalButton from "../../components/button/NormalButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReducersModel } from "../../model";
import React from "react";
import { verifyAccount } from "./actions";

const SelectProfile = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(verifyAccount());
  }, [dispatch]);

  const state = useSelector((state: ReducersModel) => state);
  const { userType } = state.profileSelectorReducer;

  const handleProfileSelector = (type: string) => {
    dispatch({
      type: Utils.ActionName.PROFILESELECTOR,
      payload: {
        userType: type,
      },
    });
  };

  const handleClick = () => {
    if (userType === "COMPANYSOLETRADER") {
      history.push(Utils.Pathname.SOLE_TRADER_CONTACT);
    } else {
      history.push(Utils.Pathname.COMPANY_CONTACTS);
    }
  };

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
            <div className={classes.buttonContainer}>
              <div
                className={classes.profileSelector}
                onClick={() => handleProfileSelector("COMPANYSOLETRADER")}
                style={
                  userType === "COMPANYSOLETRADER"
                    ? { border: "2px solid #0da4ce", color: "#0da4ce" }
                    : {}
                }
              >
                <ImageContainer
                  imgUrl={ userType==="COMPANYSOLETRADER" ? LocalImages.WorkSelected : LocalImages.Work
                }
                  style={classes.selectProfile}
                />
                <Typography
                  sx={ userType==="COMPANYSOLETRADER" ? {
                    fontSize: "16px",
                    textAlign: "center",
                    width: "100%",
                    fontWeight:"700",
                    color: "#097390",
                    float: "left",
                    marginRight: "10% !important",
                    marginBottom:"3% !important",
                    [theme.breakpoints.down(1025)]: {
                      marginBottom:"0% !important",
                      fontSize: "12px",
                      marginLeft: "2%",
                    },
                  }: {fontSize: "16px",
                  textAlign: "center",
                  width: "100%",
                  fontWeight:"700",
                  color: "#687173",
                  float: "left",
                  marginRight: "10% !important",
                  marginBottom:"3% !important",
                  [theme.breakpoints.down(1025)]: {
                    marginBottom:"0% !important",
                    fontSize: "12px",
                    marginLeft: "2%",
                  },}}
                >
                  Sole Trader
                </Typography>
                <Typography
                  sx={userType==="COMPANYSOLETRADER" ? {
                    fontSize: "10px",
                    textAlign: "center",
                    width: "100%",
                    color: "#097390",
                    float: "left",
                    marginBottom:"10% !important",
                    [theme.breakpoints.down(1025)]: {
                      
                      fontSize: "12px",
                      marginLeft: "2%",
                    },
                  } : {
                    fontSize: "10px",
                    textAlign: "center",
                    width: "100%",
                    color: "#687173",
                    float: "left",
                    marginBottom:"10% !important",
                    [theme.breakpoints.down(1025)]: {
                     
                      fontSize: "12px",
                      marginLeft: "2%",
                    },
                  } }
                >
                  I am looking for work.
                </Typography>
              </div>
              <div
                className={classes.profileSelector}
                onClick={() => handleProfileSelector("COMPANY")}
                style={
                  userType === "COMPANY" ? { border: "2px solid #0da4ce" } : {}
                }
              >
                <ImageContainer
                  imgUrl={ userType==="COMPANY" ? LocalImages.ClientSelected : LocalImages.Client
                }
                  style={classes.selectProfile}
                />
                <Typography
                  sx={userType==="COMPANY" ? {
                    fontSize: "16px",
                    textAlign: "center",
                    fontWeight:"700",
                    width: "100%",
                    color: "#097390",
                    float: "left",
                    marginBottom:"5% !important",
                    marginRight: "10% !important",
                    
                    [theme.breakpoints.down(1025)]: {
                      marginBottom:"0% !important",
                      fontSize: "12px",
                      marginLeft: "2%",
                    },
                  } :{
                    fontSize: "16px",
                    textAlign: "center",
                    fontWeight:"700",
                    width: "100%",
                    color: "#687173",
                    float: "left",
                    marginBottom:"5% !important",
                    marginRight: "10% !important",
                    [theme.breakpoints.down(1025)]: {
                      marginBottom:"0% !important",
                      fontSize: "12px",
                      marginLeft: "2%",
                    },
                  } }
                >
                  Company
                </Typography>
                <Typography
                  sx={userType==="COMPANY" ? {
                    fontSize: "10px",
                    textAlign: "center",
                    width: "100%",
                    color: "#097390",
                    float: "left",
                    marginBottom:"12% !important",
                    [theme.breakpoints.down(1025)]: {
                      fontSize: "12px",
                      marginLeft: "2%",
                      
                      marginBottom:"12% !important",
                    },
                  } : {
                    fontSize: "10px",
                    textAlign: "center",
                    width: "100%",
                    color: "#687173",
                    float: "left",
                    marginBottom:"12% !important",
                    [theme.breakpoints.down(1025)]: {
                      fontSize: "12px",
                      marginLeft: "2%",
                     
                      marginBottom:"12% !important",
                    },
                  } }
                >
                  I am looking for trades.
                </Typography>
              </div>
            </div>
            <div className={classes.normalButton}>
              <NormalButton
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "0 !important",
                  textTransform:"capitalize"
                }}
                variant="contained"
                onClick={handleClick}
              >
                <Typography className={classes.lables}>
                  Save & Continue
                </Typography>
              </NormalButton>
            </div>
          </Box>
        </div>
        <div className={classes.step}>
            <Typography sx={{ mt:"5%" , ml:"30%", fontSize:"12px", fontWeight: "500", color: "#BDBDBD" }}>
              <b>STEP</b> 02/04
            </Typography>
            <div>
            <Typography sx={{fontWeight: "600",  fontSize:"14px", color: "#828282"}}>
              Account Type
            </Typography>
            </div>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default SelectProfile;
