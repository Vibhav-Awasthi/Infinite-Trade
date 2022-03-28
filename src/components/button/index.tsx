import React from "react";
import {useTheme} from "@mui/material";
import { Button, ButtonProps } from "@mui/material";
import { useFormikContext } from "formik";

const ActionButton = ({ children, ...rest }: ButtonProps) => {
  const theme = useTheme();
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    submitForm();
  };
  const attributes: ButtonProps = {
    ...rest,
    fullWidth: true,
    onClick: handleSubmit,
  };
  return <Button sx={{[theme.breakpoints.down(1024)]: {
    padding:"28px 0"
  }}} {...attributes}>{children}</Button>;
};

export default ActionButton;