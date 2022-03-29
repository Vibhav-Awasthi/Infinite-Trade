import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LocalImages from "../../Utils/images";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import Dashboard from "../../screen/dashboard";


const useStyles = makeStyles((theme)=>({
    
 mainContainer:({theme}:any) => ({
  minHeight: "100vh",
  minWidth: "100vh",
  flexDirection: "column",
 }), 

 navAndBodyContainer:()=>({
      // width:"100%",

  }),
  headerContainer:()=>({
    // width:"100%",

}),
  bodyContainer:()=>({
    width: "100%",
    height: "100%",
    minHeight: "calc(100vh - 69px)",
    paddingTop: "68px",
  }),
  
  
}));

interface Props {
  children?: any;
  history?: any;
}
const MainContainer = ({ children, history }: Props) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <>
      <div className={classes.mainContainer}>
      <div className={classes.headerContainer}>
        {/* <Header history={history} /> */}
        <Dashboard/>
      </div>
    </div>
    </>
  );
};

export default MainContainer;
