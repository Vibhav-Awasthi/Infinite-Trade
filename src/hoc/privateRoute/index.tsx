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
          {localStorage.getItem("verify_access_Token") == null ||
          sessionStorage.getItem("verify_access_Token") == null ? (
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