
import { useStyles } from "./style";
import {  useTheme } from "@mui/material";

interface Props {
  style:any;
  imgUrl:string;
}

function ImageContainer ({style, imgUrl} : Props) {
  const theme = useTheme();
  const classes= useStyles({theme});
  return(
    <>
    <div className={`${classes.imgContainer} ${style}`}>
      <figure>
        <img src={imgUrl} alt="brand_logo" />
      </figure>

    </div>
    </>
  );

}

export default ImageContainer;