import React from "react";
import { Button, ButtonProps, useTheme } from "@mui/material";

export default function NormalButton({ children, ...rest }: ButtonProps) {
  const attributes: ButtonProps = {
      ...rest,
      fullWidth:true,
  };
  const theme=useTheme();
  return <Button sx={{padding:"20px 0px",
  
}} {...attributes}>{children}</Button>;
}
