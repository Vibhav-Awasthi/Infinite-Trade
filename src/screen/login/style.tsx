import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  loginContainer: ({ theme }: any) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "88% !important",
    height: "88% !important",
    marginLeft: "7%",
    [theme.breakpoints.down(1024)]: {
      justifyContent: "center",
      marginTop:"30%",
    },
    // "& > div": {
    //   [theme.breakpoints.down(1025)]: {
    //     width: "90% !important",
    //   },
    // },
  }),

  verifyContainer:({theme}:any) => ({
    marginTop:"35%",
    width: "90% !important",
    height: "auto !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down(1024)]: {
      marginTop:"50% !important",
      width:"85% !important",
      marginLeft:"5%",
      justifyContent: "center",
    },
  }),

  titleContainer: ({ theme }: any) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    [theme.breakpoints.down(1024)]: {
      marginRight:"2%",
    }
  }),

  brandLogo: ({ theme }: any) => ({
    width: "100%",
    // position: "relative",
    // right: "12%",
    "& figure": {
      margin: 0,
      width: "153px",
      height: "46px",
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
    marginTop:"8%",
    marginBottom: "1.5%",
  }),

  verifyTitle: ({ theme }: any) => ({
    border: "1 px solid black",
  }),
  
  buttonContainer: ({ theme }: any) => ({
    marginTop: "5%",
    // marginRight: "22%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down(1025)]: {
      width:"100%"
     },
  }),

  forgotPassword: () => ({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "3%",
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
    maxHeight:"40px",
  }),

  formCommon: () => ({
    alignItems: "flex-start",
  }),

  dontHaveAccount: () => ({
    "& a": {
      textDecoration: "none",
      color: "#687173",
    },
  }),
  endIconContainer: () => ({
    backgroundColor: "#0da4ce",
  }),
});

export { useStyles };
