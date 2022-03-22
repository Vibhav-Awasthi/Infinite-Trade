import React from "react";
import ImageContainer from "../../components/ImageContainer";
import Schema from "../../schema";
import InputField from "../../components/inputfield";
import Utils from "../../Utils";

import {
  CommonButton,
  ActiveButton,
} from "../../components/styledComponents/auth/signIn";

import { useHistory } from "react-router-dom";
import { useStyles } from "./style";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form } from "formik";
import { HelmetProvider } from "react-helmet-async";
import LocalImages from "../../Utils/images";
import { useDispatch } from "react-redux";

const CompanyContact = () => {
  const [flag, setFlag] = React.useState(true);
  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useDispatch();
  const history = useHistory();

  function handleClick() {
    setFlag(!flag);
  };

  const [tool, setTool] = React.useState(false);

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
                    marginTop: "2%",
                    marginBottom:"10%",
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
                mobileNo: "",
                officeNo: "",
              }}
              validationSchema={Schema.CompanyContactSchema}
              onSubmit={(values) => {
                console.log(values, tool);
                dispatch({
                  type: Utils.ActionName.PROFILESELECTOR,
                  payload: {
                    mobileNo: values.mobileNo,
                    companyDetail: {
                      officeNo: values.officeNo,
                      areYouInTool: tool
                    }
                  }
                })
                history.push(Utils.Pathname.COMPANY_DETAILS);
              }}
            >
              <Form>
                <div className={classes.lables}>
                  <Typography>PHONE NUMBER*</Typography>
                </div>
                <div className={classes.inputField}>
                  <InputField
                    placeholder="Enter your mobile number"
                    name="mobileNo"
                    type={"text"}
                  />
                </div>
                <div className={classes.lables}>
                  <Typography sx={{mt:"3%"}}>OFFICE NUMBER*</Typography>
                </div>
                <div className={classes.inputField}>
                  <InputField
                    placeholder="Enter work number"
                    name="officeNo"
                    type={"text"}
                  />
                </div>

                <div className={classes.lables}>
                  <Typography sx={{ color: "#424546" }}>
                    ARE YOU ON THE TOOLS?
                  </Typography>
                </div>
                <div className={classes.tools}>
                    <CommonButton
                      className={classes.activeButton}
                      sx={tool?{ color: "#fff", backgroundColor: "#000" } : { color: "#000", backgroundColor: "#fff" }}
                      variant="contained"
                      onClick={() => { setTool(true); handleClick() }}
                    >
                      YES
                    </CommonButton> 
                    <CommonButton
                      className={classes.activeButton}
                      sx={tool?{ color: "#000", backgroundColor: "#fff" } : { color: "#fff", backgroundColor: "#000" }}
                      variant="contained"
                      onClick={() => { setTool(false); handleClick() }}
                    >
                      No
                    </CommonButton>
                </div>

                <ActiveButton
                  className={classes.activeButton}
                  sx={{ color: "#fff", textTransform: "capitalize" }}
                  type="submit"
                  variant="contained"
                >
                  Save & Continue
                </ActiveButton>
              </Form>
            </Formik>
          </div>
          <div className={classes.step}>
            <Typography sx={{ mt:"5%" , fontSize:"12px", fontWeight: "500", color: "#BDBDBD" }}>
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

export default CompanyContact;
