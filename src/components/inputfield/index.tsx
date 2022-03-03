import React from "react";
import { useField } from "formik";
import { TextField, TextFieldProps } from "@mui/material";

// type InputFieldProps = {
//   name: string;
//   onChange: Function;
//   onBlur: Function;
// };

const InputField = ({ name, ...rest }: TextFieldProps) => {
  const [field, meta] = useField(name as string);

  const attributes: TextFieldProps = {
    fullWidth: true,
    variant: "outlined",
    ...field,
    ...rest,
  };

  if (meta && meta.touched && meta.error) {
    attributes.error = true;
    attributes.helperText = meta.error;
  }

  return (
    <div>
      <TextField  {...attributes} />
    </div>
  );
};

export default InputField;
