import React, { lazy } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "../hoc/publicRoute";
import Utils from "../Utils";
import { useSelector } from "react-redux";
import { ReducersModel } from "../model";

const Login = lazy(() => import("../screen/login/index"));
const ForgotPassword = lazy(() => import("../screen/login/forgotPassword"));
const ResetPassword = lazy(() => import("../screen/login/resetPassword"));
const Signup = lazy(() => import("../screen/signup/index"));
const Verify = lazy(() => import("../screen/signup/verify"));
const SelectProfile = lazy(() => import("../screen/signup/selectProfile"));
const SoleTrader = lazy(() => import("../screen/signup/soleTraderContact"));
const SoleTraderDetails = lazy(
  () => import("../screen/signup/soleTraderDetails")
);
const Dashboard =lazy(() => import("../screen/dashboard/index"))
const CompanyDetails = lazy(() => import("../screen/signup/companyDetails"));
const CompanyContact = lazy(() => import("../screen/signup/companyContact"));

const Routers: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2aaebc",
        light: "#f5f6fa",
      },
      secondary: {
        main: "#363353",
      },
      text: {
        primary: "#000000",
        secondary: "#100d2e",
      },
    },
    typography: {
      fontFamily: "Roboto,sans-serif",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
    },
  });

  const state = useSelector((state: ReducersModel) => state);
  console.log(state);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <PublicRoute
            path={`${Utils.Pathname.LOGIN}`}
            component={Login}
            exact
          />
          <PublicRoute
            path={`${Utils.Pathname.FORGOT_PASSWORD}`}
            component={ForgotPassword}
            exact
          />
          <PublicRoute
            path={`${Utils.Pathname.SIGNUP}`}
            component={Signup}
            exact
          />

          <PublicRoute
            path={`${Utils.Pathname.VERIFY}`}
            component={Verify}
            exact
          />
          <PublicRoute
            path={`${Utils.Pathname.RESET_PASSWORD}`}
            component={ResetPassword}
            exact
          />
          <PublicRoute
            path={`${Utils.Pathname.SELECT_PROFILE}`}
            component={SelectProfile}
            exact
          />
          <PublicRoute
            path={`${Utils.Pathname.SOLE_TRADER_CONTACT}`}
            component={SoleTrader}
            exact
          />
          <PublicRoute
            path={`${Utils.Pathname.SOLE_TRADER_DETAILS}`}
            component={SoleTraderDetails}
            exact
          />
          <PublicRoute
            path={`${Utils.Pathname.COMPANY_DETAILS}`}
            component={CompanyDetails}
            exact
          />
          <PublicRoute
            path={`${Utils.Pathname.COMPANY_CONTACTS}`}
            component={CompanyContact}
            exact
          />
          <PublicRoute
            path={`${Utils.Pathname.Dashboard}`}
            component={Dashboard}
            exact
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Routers;
