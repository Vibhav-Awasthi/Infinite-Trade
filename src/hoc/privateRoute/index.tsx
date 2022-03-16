import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import MainContainer from "../mainContainer/index";

interface Props {
  path: string;
  component: any;
  exact?: boolean;
}
const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  return (
    <Route
      exact
      {...rest}
      render={(props) => (
        <React.Fragment>
          {localStorage.getItem("accessToken") !== null ||
          sessionStorage.getItem("accessToken") !== null ? (
            <MainContainer {...props}>
              <Suspense fallback={""}>
                <Component {...props} />
              </Suspense>
            </MainContainer>
          ) : (
            <Redirect to="/" />
          )}
        </React.Fragment>
      )}
    />
  );
};
export default PrivateRoute;