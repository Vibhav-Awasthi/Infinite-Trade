import React from "react";
import LocalImages from "../../Utils/images";
import ImageContainer from "../../components/ImageContainer";
import Slider from "../../components/slider";
import { useStyles } from "./style";
import {  useTheme } from "@mui/material";
import { InnerMainDiv, HeadingText, SmallText } from "../../components/styledComponents/auth/signIn";
import { TextField } from "@mui/material";
import { Formik, Form } from "formik";
import {
  Typography,
  IconButton,
  InputAdornment,
  Button,
  Link,
} from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
interface props {
  email: string;
  password: string;
}
const Signup = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <HelmetProvider>
      <div className={classes.mainWrapper}>
        <div>
          <Slider />
        </div>  
        <div >
          <div className={classes.formContainer}>
            <ImageContainer style={classes.brandLogo} imgUrl={LocalImages.Logo}/>
            <HeadingText
              
            >
              Login to Infinite Trades
            </HeadingText>
            
            
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Signup;

