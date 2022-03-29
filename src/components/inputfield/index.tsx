import React from "react";
import { useField } from "formik";
import { TextField, TextFieldProps, useTheme } from "@mui/material";


const InputField = ({ name, ...rest }: TextFieldProps) => {
  const [field, meta] = useField(name as string);
  const theme= useTheme();

  console.log(name,meta);

  const attributes: TextFieldProps = {
    ...rest,
    ...field,
    fullWidth: true,
    variant: "outlined",
    value: field.value || "",
    // autoComplete: "off"
  };

  if (meta && meta.touched && meta.error) {
    attributes.error = true;
    attributes.helperText = meta.error;
  }

  return (
    <div>
      <TextField
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              boxShadow: "-2px 0px 23px -2px rgba(0,0,0,0.33)",
              border:"1px solid #000000"
              // -webkit-box-shadow: -2px 0px 23px -2px rgba(0,0,0,0.33);
              // -moz-box-shadow: -2px 0px 23px -2px rgba(0,0,0,0.33);
            },
          },
          [`& fieldset`]: {
            borderRadius: 0,
          },
          "& input":{[theme.breakpoints.down(1024)]: {
            height:"45px",
          }}
          
        }}
        {...attributes}
      />
    </div>
  );
};

export default InputField;
