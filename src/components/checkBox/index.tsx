import React from 'react';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel, CheckboxProps, FormControlProps, FormHelperText
} from '@mui/material';
import { useField, useFormikContext } from 'formik';

const CheckBox = ({
    name,
    label,
    ...otherProps
}: any) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (evt: any) => {
        const { checked } = evt.target;
        setFieldValue(name, checked);
    };

    const attributes: CheckboxProps = {
        ...field,
        onChange: handleChange
    };

    const configFormControl: FormControlProps = {};

    console.log(meta)
    return (
        <FormControl {...configFormControl}>
            {/* <FormLabel component="legend">{legend}</FormLabel> */}
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox required sx={{
                        color: "black",
                        '&.Mui-checked': {
                            color: "black",
                        },
                    }} {...attributes} />}
                    label={label}
                />
            </FormGroup>
            <FormHelperText sx={{color:"red"}}>
                {Boolean(meta && meta.touched) && meta.error}
            </FormHelperText>
        </FormControl>
    );
};

export default CheckBox;