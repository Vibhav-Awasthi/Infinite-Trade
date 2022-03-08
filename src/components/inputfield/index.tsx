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
      <TextField
        size="small"
        sx={{
          '& label.Mui-focused': {
      borderColor: '#000',
    },
    '& .MuiInput-underline:after': {
      border: '0.2px solid #000',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '0.2px solid #000',
      },
      '&:hover fieldset': {
        border: '0.2px solid #000',
      },
      '&.Mui-focused fieldset': {
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
    </div>
  );
};

export default InputField;
