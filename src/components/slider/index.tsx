import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LocalImages from "../../Utils/images";
import { Carousel } from "react-responsive-carousel";
import ImageContainer from "../ImageContainer";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";


const useStyles = makeStyles((theme)=>({
    
 sliderWrapper:({theme}:any) => ({
   width:"50%",
  [theme.breakpoints.down("1025")]: {
    display:"none"
  },
 }),

  imageContainer:()=>({
      // width:"100%",

  }),
  carouselImage:()=>({
      "& figure":{
          margin:0,
          // width:"100%",
          height:"100vh"
      },
      "& img":{
        objectFit:"cover",
      },
  }),
  
  
}));
const Slider = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        infiniteLoop
        autoPlay
        useKeyboardArrows
        transitionTime={1000}
        className={classes.sliderWrapper}
      >
        <div className={classes.imageContainer}>
          <ImageContainer
            style={classes.carouselImage}
            imgUrl={LocalImages.Construction}
          />
        </div>
        <div className="slide-holder">
          <ImageContainer
            style={classes.carouselImage}
            imgUrl={LocalImages.Toolkit}
          />
        </div>
        <div className="slide-holder">
          <ImageContainer
            style={classes.carouselImage}
            imgUrl={LocalImages.Hand}
          />
        </div>
        <div className="slide-holder">
          <ImageContainer
            style={classes.carouselImage}
            imgUrl={LocalImages.Plan}
          />
        </div>
        <div className="slide-holder">
          <ImageContainer
            style={classes.carouselImage}
            imgUrl={LocalImages.Build}
          />
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
