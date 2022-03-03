import React from "react";
import { useStyles } from "./style";
import { useTheme } from "@mui/material";
import Slider from "../../components/slider"
interface Props {
  children?: any;
  history?: any;
}
function LoginContainer({ children, history }: Props) {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <>
      <div className={classes.container}>
          <Slider/>
        <div className={classes.loginContainer}>{children}</div>
      </div>
    </>
  );
}

export default LoginContainer;
