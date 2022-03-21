import { makeStyles } from "@mui/styles/";

const useStyles = makeStyles((theme) => ({
  container: ({theme}:any) => ({
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("1200")]: {
      margin: "0",
      height: "110%",
      width: "100%",
    },
  }),

  loginContainer: ({ theme }: any) => ({
    width: "37%",
    height: "100%",
    margin: "0 auto",
    // [theme.breakpoints.down(1200)]: {
    //   margin: "0",
    //   height: "100%",
    //   width: "100%",
    // },
    [theme.breakpoints.down(1025)]: {
      marginTop: "30%",
      height: "100%",
      width: "100%",
    },
    [theme.breakpoints.between(800, 850)]: {
      height: "auto",
    },

    [theme.breakpoints.between(1025,1200)]:{
        height:"auto"
    },
    "& >div": {
      display: "flex",
      width: "100%",
      height: "100%",
      // "& >div": {
      //   width: "86%",
      //   margin: "5%",
      //   [theme.breakpoints.between(1360, 1370)]: {
      //     margin: "10% 3%",
      //   },
      //   background: "#fff",
      //   borderRadius: "10px",
      //   padding: "30px",
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   position: "relative",
      //   fontFamily: theme.typography.fontFamily,
      //   [theme.breakpoints.down("sm")]: {
      //     margin: 0,
      //   },
      // },
    },
  }),
}));

export { useStyles };
