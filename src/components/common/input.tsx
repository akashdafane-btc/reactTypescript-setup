import React from 'react';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import Input from '@mui/material/Input';
// import { CustomInputProps } from '../../interfaces/types';

export type CustomInputProps = {
  label?: string;
  placeholder?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  autoFocus?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  defaultValue?: any;
  disabled?: boolean;
  type?: string;
  value?: any;
  variant?: 'filled' | 'outlined' | 'standard';
  name?: string;
  required?: boolean;
  inputProps?: object;
  isControlled?: boolean;
  registeredEvents?: any;
  multiLine?: boolean;
  rows?: number | string;
  maxRows?: number | string;
  minRows?: number | string;
  error?: any;
  showError?: boolean;
  helperText?: React.ReactNode;
};

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
  registeredEvents,
  multiLine,
  rows,
  maxRows,
  minRows,
  helperText,
  error,
  showError,
}) => {
  return (
    <FormControl variant="standard">
      {isControlled ? (
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
          rows={rows}
          maxRows={maxRows}
          minRows={minRows}
          multiline={multiLine}
          InputProps={inputProps}
          helperText={helperText}
        />
      ) : (
        <TextField
          {...(registeredEvents || {})}
          // placeholder={placeholder}
          // disabled={disabled}
          // autoComplete={autoComplete}
          // autoFocus={autoFocus}
          // type={accept}
          // multiline={multiLine}
          // id={id}
          // rows={rows}
          // maxRows={maxRows}
          // minRows={minRows}
          // // onClick={onChange}
          // onChange={onChange}
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
          rows={rows}
          maxRows={maxRows}
          minRows={minRows}
          multiline={multiLine}
          error={error}
          helperText={helperText}
        />
      )}
      {showError && error && (
        <>
          <span>{error}</span>
        </>
      )}
    </FormControl>
  );
};

export default CustomInput;
