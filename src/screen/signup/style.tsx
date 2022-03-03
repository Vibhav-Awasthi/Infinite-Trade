import { makeStyles } from "@mui/styles/";

const useStyles = makeStyles({
    

    mainWrapper:() => ({
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    }),

    carouselImage:()=>({
        "& figure":{
            margin:0,
            width:"80%",
            height:"800px"
        }
    }),
    formContainer:()=>({
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       flexDirection:"column",
    
    }),
    brandLogo:()=>({
        width:"60%",
        marginTop:"30%"
    }),
    
    loginText:()=>({
        fontFamily: "Overpass",
        fontStyle: "bold",
        fontSize: "30px",
        lineHeight: "38px",
        // lineHeight: "100%",
        align: "left",
        verticalAlign: "center"}),

  });

  export {useStyles};