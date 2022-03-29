import { styled } from "@mui/system";
import ActionButton from "../../button";
import NormalButton from "../../button/NormalButton";

export const InnerMainDiv = styled("div")({
  backgroundColor: "#fff",
  width: "50%",
});

export const ActiveButton = styled(ActionButton)({
    width: "100%",
    marginTop: "20px",
    borderRadius:"0 !important",
  });

  export const CommonButton =styled(NormalButton)({
    width: "208px",
    marginTop: "20px",
    borderRadius:"0 !important",
    "&:hover": {
      backgroundColor: "#63615b",
    }
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