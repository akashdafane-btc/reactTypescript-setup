import React from 'react';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import { CustomInputProps } from '../../interfaces/types';

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  id,
  onChange,
  autoComplete,
  autoFocus,
  color,
  defaultValue,
  disabled,
  type,
  value,
  variant,
  name,
  required,
  inputProps,
  isControlled,
}) => {
  return (
    <FormControl variant="standard">
      <TextField
        id={id}
        label={label}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        color={color}
        type={type}
        value={value}
        variant={variant}
        name={name}
        required={required}
        InputProps={inputProps}
      />
    </FormControl>
  );
};

export default CustomInput;
