import { makeStyles } from "@mui/styles/";

const useStyles = makeStyles((theme) => ({
  container: () => ({
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  }),

  loginContainer: ({ theme }: any) => ({
    width: "38%",
    height: "100%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      margin: "0",
      width: "100%",
    },
    [theme.breakpoints.between(800, 850)]: {
      height: "auto",
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
