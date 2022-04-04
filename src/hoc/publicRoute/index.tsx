import { Suspense } from "react";
import LoginContainer from "../../hoc/loginContainer/index";
import {Route} from "react-router-dom";
import Utils from "../../Utils";
import { Redirect } from "react-router-dom";
interface Props {
  path: string;
  component: any;
  exact?: boolean;
}

const PublicRoute = ({ component: Component, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Suspense fallback={""}>
          {localStorage.getItem("access_token") === null &&
          sessionStorage.getItem("access_token") === null ? (
            <LoginContainer {...props}>
              <Component {...props} />
            </LoginContainer>
          ) : (
            <Redirect to={Utils.Pathname.Dashboard} />
          )}
        </Suspense>
      )}
    />
  );
};
export default PublicRoute;
