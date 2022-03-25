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
};

export default function AutoComplete(props: AutocompleteProps) {
  const { options, name, optionSelected, ...rest } = props;
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const err = meta && meta.touched && meta.error;
  console.log(name, meta);

  return (
    <div className="Err">
      <Autocomplete
        sx={{
          textAlign:"left",
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
      {err && (
        <Typography variant="caption" color="error" sx={{ml:"4%"}}>
          {meta.error}
        </Typography>
      )}
    </div>
  );
}
