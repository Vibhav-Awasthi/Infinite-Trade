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

import { Link, useHistory } from "react-router-dom";
import { useStyles } from "./style";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form } from "formik";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LocalImages from "../../Utils/images";
import location from "../../data/location";
import { useDispatch, useSelector } from "react-redux";
import { ReducersModel } from "../../model";
import { getSkills, CompanyProfileComplete } from "./actions";

const CompanyDetails = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useDispatch();
  const history = useHistory();
  const { skills } = useSelector(
    (state: ReducersModel) => state.dropDownReducer
  );

  React.useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

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
                businessName: "",
                abnNumber: "",
                location: null,
                skills: [],
                industryExp: 0,
              }}
              validationSchema={Schema.SoleTraderSchema}
              onSubmit={(value, { setSubmitting }) => {
                dispatch(CompanyProfileComplete(value, history));
              }}
            >
              <Form>
                <div className={classes.lables}>
                  <Typography>Business Name*</Typography>
                </div>
                <div className={classes.inputField}>
                  <InputField
                    placeholder="Enter your Business Name"
                    name="businessName"
                    type={"text"}
                  />
                </div>
                <div className={classes.lables}>
                  <Typography>ABN*</Typography>
                </div>
                <div className={classes.inputField}>
                  <InputField
                    className={classes.textfieldClass}
                    placeholder="Enter Your Business Number"
                    name="abnNumber"
                    type={"text"}
                  />
                </div>
                <div className={classes.lables}>
                  <Typography>ADDRESS*</Typography>
                  <Typography className={classes.lables}></Typography>
                </div>
                <div className={classes.inputField}>
                  <AutoComplete
                    name="location"
                    options={location}
                    optionSelected={(
                      option: string | { [value: string]: any }
                    ) => {
                      if (typeof option === "string") return option as string;
                      else return option?.address as string;
                    }}
                  />
                </div>
                <div className={classes.lables}>
                  <Typography>AVAILABLE TRADES*</Typography>
                </div>
                <div className={classes.inputField}>
                  <AutoComplete
                    name="skills"
                    multiple
                    limitTags={2}
                    options={skills}
                    optionSelected={(
                      option: string | { [value: string]: string }
                    ) => {
                      if (typeof option === "string") return option as string;
                      else return option?.TYPE as string;
                    }}
                  />
                </div>
                <div className={classes.lables}>
                  <Typography>INDUSTRY EXPERIENCE*</Typography>
                </div>
                <div className={classes.inputField}>
                  <InputField
                    className={classes.textfieldClass}
                    placeholder="Enter your years of experience"
                    name="industryExp"
                    type={"text"}
                  />
                </div>
                <Link to={"#"}>
                  <ActiveButton
                    className={classes.activeButton}
                    sx={{ color: "#fff", textDecoration: "none", textTransform: "capitalize" }}
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
          <div className={classes.step}>
            <Typography sx={{ mt: "5%", ml: "45%", fontSize: "12px", fontWeight: "500", color: "#BDBDBD" }}>
              <b>Step</b> 04/04
            </Typography>
            <div>
              <Typography sx={{ fontWeight: "600", fontSize: "14px", color: "#828282" }}>
                Business Details
              </Typography>
            </div>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default CompanyDetails;
