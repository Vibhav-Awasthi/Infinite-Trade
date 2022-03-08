import React from "react";
import ImageContainer from "../../components/ImageContainer";
import Schema from "../../schema";
import { dropdownData } from "../../components/select";
import InputField from "../../components/inputfield";
import AutoComplete from "../../components/autoComplete";
import { Checkbox } from "@mui/material";
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
                Your Company Details
              </Typography>
            </div>
            <div className={classes.title}>
              <Typography
                sx={{
                  fontSize: "15px",
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
                Tell us about your business and what you do.
              </Typography>
            </div>
          </Box>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Schema.BusinessDetailSchema}
            onSubmit={(value, { setSubmitting }) => {
              // dispatch(login(value, history, setSubmitting));
            }}
          >
            <Form>
              <div className={classes.lables}>
                <Typography>Business Name*</Typography>
              </div>
              <div className={classes.inputField}>
                <InputField
                  placeholder="Enter your Business Name"
                  name="name"
                  type={"name"}
                  // touched={touched}
                  // errors={errors}</Form>
                />
              </div>
              <div className={classes.lables}>
                <Typography>ABN*</Typography>
              </div>
              <div className={classes.inputField}>
                <InputField
                  className={classes.textfieldClass}
                  placeholder="Enter Your Business Number"
                  name="phone_number"
                  type={"number"}
                  
                />
              </div>
              <div className={classes.lables}>
                <Typography>ADDRESS*</Typography>
                <Typography className={classes.lables}></Typography>
              </div>
              <div className={classes.inputField}>
                <InputField
                  className={classes.inputField}
                  placeholder="Location"
                  name="location"
                  type={"text"}
                />
              </div>
              <div className={classes.lables}>
                <Typography>AVAILABLE TRADES*</Typography>
              </div>
              <div className={classes.inputField}>
                <AutoComplete
                  multiple
                  limitTags={2}
                  options={dropdownData}
                  optionSelected={(
                    option: string | { [value: string]: string }
                  ) => {
                    if (typeof option === "string") return option as string;
                    else return option?.value as string;
                  }}
                />
              </div>
              <div className={classes.lables}>
                <Typography>INDUSTRY EXPERIENCE*</Typography>
              </div>
              <div className={classes.inputField}>
              <AutoComplete
                  multiple
                  limitTags={2}
                  options={dropdownData}
                  optionSelected={(
                    option: string | { [value: string]: string }
                  ) => {
                    if (typeof option === "string") return option as string;
                    else return option?.value as string;
                  }}
                />
              </div>
              <Link to={"#"}>
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
              </Link>
            </Form>
          </Formik>
        </div>
      </HelmetProvider>
    </>
  );
};

export default Signup;
