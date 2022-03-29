import { TextField, TextFieldProps, useTheme } from "@mui/material";
import React from "react";

type Props = {
  setFieldValue: Function;
  fieldValue: { [key: string]: any };
} & TextFieldProps;

export default function NormalInput({ name, setFieldValue,fieldValue }: Props) {
  const attributes: TextFieldProps = {
    name,
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (name) setFieldValue({ [name]: evt.target.value });
    },
    value: fieldValue
  };
  const theme= useTheme();
  return (
    <TextField
      size="small"
      sx={{
        
        "& label.Mui-focused": {
          borderColor: "#424546",
        },
        "& .MuiInput-underline:after": {
          border: "1px solid #424546",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "1px solid #424546",
          },
          "&:hover fieldset": {
            border: "1px solid #424546",
          },
          "&.Mui-focused fieldset": {
            boxShadow: "-2px 0px 23px -2px rgba(0,0,0,0.33)",
            // -webkit-box-shadow: -2px 0px 23px -2px rgba(0,0,0,0.33);
            // -moz-box-shadow: -2px 0px 23px -2px rgba(0,0,0,0.33);
          },
        },
        [`& fieldset`]: {
          borderRadius: 0,
        },
      }}
      {...attributes}
    />
  );
}
