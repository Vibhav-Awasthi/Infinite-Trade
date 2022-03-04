import React, { lazy } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "../hoc/publicRoute";
import Utils from "../Utils";

const Login = lazy(() => import("../screen/login/index"));
const ForgotPassword = lazy(() => import("../screen/login/forgotPassword"));
const Signup = lazy(() => import("../screen/signup/index"));
const Verify = lazy(() => import("../screen/signup/verify"));

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
        primary: "#8a9099",
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
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Routers;
