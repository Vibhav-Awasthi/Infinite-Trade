import * as React from "react";
import {
  Autocomplete,
  TextField,
  TextFieldProps,
  AutocompleteValue,
  Typography,
} from "@mui/material";
import { useFormikContext, useField } from "formik";

type AutocompleteProps = {
  name: string;
  options: Array<string | { [value: string]: any }>;
  optionSelected: (option: string | { [value: string]: any }) => string;
  multiple?: boolean;
  limitTags?: number;
  defaultValue?: [string | { [value: string]: any }];
  placeholderText?: string;
  errors?: string;
  touched?: boolean;
};

export default function AutoComplete(props: AutocompleteProps) {
  const { options, name, optionSelected, touched, errors, ...rest } = props;
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  console.log(name,meta);

  return (
    <div>
      <Autocomplete
        sx={{
          [`& fieldset`]: {
            borderRadius: 0,
          },
        }}
        size="small"
        {...rest}
        id="multiple-limit-tags"
        options={options}
        getOptionLabel={optionSelected}
        renderInput={(params) => {
          return <TextField {...params} placeholder={"Please Select"} />;
        }}
        onChange={(evt: any, value: any) => {
          setFieldValue(name, value);
        }}
      />
      {touched && Boolean(errors) && (
        <Typography variant="caption" color="error">
          {errors}
        </Typography>
      )}
    </div>
  );
}
