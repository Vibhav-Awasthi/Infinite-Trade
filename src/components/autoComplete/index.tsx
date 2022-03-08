import * as React from "react";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";

type AutocompleteProps = {
  multiple?: boolean;
  limitTags?: number;
  options: Array<string | { [value: string]: string }>;
  placeholderText?: string;
  optionSelected: (option: string | { [value: string]: string }) => string;
  defaultValue?: [string | { [value: string]: string }];
};

export default function AutoComplete(props: AutocompleteProps) {
  const { options, optionSelected, ...rest } = props;
  return (
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
      renderInput={(params) => (
        <TextField {...params} placeholder={"Please Select"} />
      )}
    />
  );
}
