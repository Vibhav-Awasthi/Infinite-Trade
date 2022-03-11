import React from "react";
import { Button, ButtonProps } from "@mui/material";

export default function NormalButton({ children, ...rest }: ButtonProps) {
  const attributes: ButtonProps = {
      ...rest,
      fullWidth:true,
  };
  return <Button sx={{padding:"20px 0px"}} {...attributes}>{children}</Button>;
}
