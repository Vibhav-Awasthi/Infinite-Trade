import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { useFormikContext } from "formik";

const ActionButton = ({ children, ...rest }: ButtonProps) => {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    submitForm();
  };
  const attributes: ButtonProps = {
    ...rest,
    fullWidth: true,
    onClick: handleSubmit,
  };
  return <Button {...attributes}>{children}</Button>;
};

export default ActionButton;