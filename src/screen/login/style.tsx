import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  loginContainer: ({ theme }: any) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    width: "88% !important",
    height: "88% !important",
    marginLeft: "8%",
    [theme.breakpoints.down(1024)]: {
      padding:"50px",
      justifyContent: "center",
    },
    "& >div": {
      [theme.breakpoints.down(1025)]: {
        width: "90% !important",
      },
    },
  }),

  titleContainer: ({ theme }: any) => ({
     display:"flex",
     flexDirection:"column",
     width:"100%",
    //  border:"1px solid black",
     
    
  }),

  brandLogo: ({ theme }: any) => ({
    width: "100%",
    position:"relative",
     right:"12%",
    "& figure": {
      margin: 0,
      width: "140px",
      height: "70px",
      [theme.breakpoints.up(1920)]: {
        width: "200px",
        height: "100px",
      },
      [theme.breakpoints.up(2560)]: {
        width: "240px",
        height: "120px",
      },
    },
  }),

  title: ({ theme }: any) => ({
    width: "100%",
    position:"relative",
     right:"12%",
     
    // margin: "30px 160px 15px 0",
    // [theme.breakpoints.up(1920)]: {
    //   margin: "32px 0 20px 0",
    //   "& .MuiTypography-h5": {
    //     fontSize: "30px",
    //   },
    // },
    // [theme.breakpoints.up(2560)]: {
    //   margin: "40px 0 25px 0",
    //   "& .MuiTypography-h5": {
    //     fontSize: "40px",
    //   },
    // },
    // [theme.breakpoints.down("xs")]: {
    //   margin: "40px 0 25px 0",
    //   "& .MuiTypography-h5": {
    //     fontSize: "1.4rem",
    //   },
    // },
    // "& .MuiTypography-h5": {
    //   fontWeight: 800,
    // },
  }),
  lables: ({ theme }: any) => ({
    float: "left",
    marginBottom: "3%",
    // margin: "25px 0 15px 0",
    // [theme.breakpoints.up(1920)]: {
    //   margin: "32px 0 20px 0",
    //   "& .MuiTypography-h5": {
    //     fontSize: "30px",
    //   },
    // },
    // [theme.breakpoints.up(2560)]: {
    //   margin: "40px 0 25px 0",
    //   "& .MuiTypography-h5": {
    //     fontSize: "40px",
    //   },
    // },
    // [theme.breakpoints.down("xs")]: {
    //   margin: "40px 0 25px 0",
    //   "& .MuiTypography-h5": {
    //     fontSize: "1.4rem",
    //   },
    // },
    // "& .MuiTypography-h5": {
    //   fontWeight: 800,
    // },
  }),

  forgotPassword:()=>({
      display:"flex",
      justifyContent:"space-between",
      marginBottom:"3%",
      "& a": {
        textDecoration: "none",
        color: "#687173",
      },
  }),

  inputField: () => ({
    marginBottom: "5%",
  }),

  activeButton: () => ({
    color: "#ffffff",
    backgroundColor: "#0da4ce",
  }),

  formCommon: () => ({
    alignItems: "flex-start",
  }),

  dontHaveAccount:()=>({
    "& a": {
      textDecoration: "none",
      color: "#687173",
    },
  })
});

export { useStyles };
