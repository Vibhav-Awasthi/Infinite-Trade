import { styled } from "@mui/system";
import { Button } from "@mui/material"

export const InnerMainDiv = styled("div")({
  backgroundColor: "#fff",
  width: "50%",
});

export const ActiveButton = styled(Button)({
    width: "100%",
    height: "54px",
    marginTop: "20px",
  });

export const HeadingText = styled("span")({
    // width:"100%",
  fontSize: "30px",
  fontWeight: "bold",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#4f4f4f",
});

export const SmallText = styled("span")({
  fontSize: "16px",
  fontStretch: "normal",
  lineHeight: "1.5",
  color: "#828282",
  margin: "4px 0 42px 0",
});