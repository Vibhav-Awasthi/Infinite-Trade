import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";

const useStyles = makeStyles({
  loginContainer: ({ theme }: any) => ({
    width: "90% !important",
    height: "89% !important",
    // marginLeft: "8%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down(1024)]: {
      padding: "50px",
      justifyContent: "center",
    },
    // "& >div": {
    //   [theme.breakpoints.down(1025)]: {
    //     width: "90% !important",
    //   },
    // },
  }),

  titleContainer: ({ theme }: any) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "right",
  }),

  brandLogo: ({ theme }: any) => ({
    width: "100%",
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

  checkBoxContainer: () => ({
    float: "left",
  }),

  checkBox: () => ({
    background: " #FFFFFF",
    boxSizing: "border-box",
    marginBottom: "5px",
    "&.css-rfs483-MuiFormControlLabel-root": {
      marginLeft: "-26px",
      marginRight: "0px",
      width: "100%",
    },
  }),

  ckBox: () => ({
    "&.css-3zq233-MuiButtonBase-root-MuiCheckbox-root.Mui-checked": {
      color: "#000",
    },
  }),

  endIconContainer: () => ({
    backgroundColor: "#0da4ce",
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

  verifyTitle: ({ theme }: any) => ({
    border: "1 px solid black",
    position: "relative",
    right: "11%",
    // width:"43% !important",
    [theme.breakpoints.down(1025)]: {
      position: "relative",
      right: "11%",
    },
  }),
  resendMail: () => ({
    "&:hover": {
      background: "none",
    },
  }),

  lables: ({ theme }: any) => ({
    float: "left",
    marginTop: "1.5%",
    marginBottom: "1.5%",
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

  forgotPassword: () => ({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "3%",
    "& a": {
      textDecoration: "none",
      color: "#687173",
    },
  }),

  profileSelector: () => ({
    border: "2px solid grey",
    width: "43%",
    cursor: "pointer",
  }),

  inputField: () => ({
    marginBottom: "1%",
    "& input::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "& input::-webkit-inner-spin-button": {
      webkitAppearance: "none",
      margin: 0,
    },
    // "& input[type=number]": {
    //   MozAppearance: "textfield",
    // },
  }),

  textfieldClass: () => ({
   
  }),

  selectProfile: ({ theme }: any) => ({
    display: "flex",
    height: "100px",
    width: "100%",
    marginRight: "20%",
    alignItems: "center",
    justifyContent: "center",
    "& figure": {
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

  normalButton: () => ({
    marginTop: "5%",
    width: "100%",
  }),

  activeButton: () => ({
    color: "#ffffff",
    backgroundColor: "#0da4ce",
    maxHeight: "40px",
  }),

  formCommon: () => ({
    alignItems: "flex-start",
  }),
  buttonContainer: () => ({
    marginTop: "5%",
    // marginRight: "22%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }),
  dontHaveAccount: () => ({
    "& a": {
      textDecoration: "none",
      color: "#687173",
    },
  }),
  tools: () => ({
    display: "flex",
    width: "100%",
  }),
});

export { useStyles };
