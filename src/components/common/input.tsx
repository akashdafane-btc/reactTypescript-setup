// import React, { useState } from 'react';
// import { Form, InputGroup } from 'react-bootstrap';
// import { InputProps } from '../../interfaces/types';

// const Input: React.FC<InputProps> = ({
//   type,
//   placeholder,
//   isPassword,
//   iconClass,
//   onButtonClick,
//   tabindex,
//   controlId,
//   label,
//   isRequired,
//   hintText,
//   isControlled,
//   name,
//   onPaste,
//   disabled,
//   onChange,
//   accept,
//   id,
//   value,
//   onBlur,
//   buttonLabel,
//   hasButton,
//   isButtonDisabled,
//   isLoading,
//   buttonVariant,
//   buttonType,
//   prependText,
//   showError,
//   error,
//   autoFocus,
//   register,
// }) => {
//   const [hidePassword, setHidePassword] = useState(true);

//   const managePasswordVisibility = () => {
//     setHidePassword(!hidePassword);
//   };

//   const showPassword = () => {
//     if (isPassword) {
//       return (
//         <i
//           className={
//             hidePassword ? 'fas fa-eye-slash' : 'fa fa-eye show-icon-in-textbox'
//           }
//           aria-hidden="true"
//           onClick={managePasswordVisibility}
//         />
//       );
//     }
//     return null;
//   };

//   return (
//     <div>
//       <Form.Group
//         className={iconClass && !onButtonClick ? 'with-icon' : ''}
//         tabIndex={tabindex}
//         controlId={controlId}>
//         {label && (
//           <Form.Label>
//             {label}
//             {isRequired && <span className="required"> *</span>}
//             {hintText && <span className="input-example">{hintText}</span>}
//           </Form.Label>
//         )}
//         <InputGroup>
//           {isControlled ? (
//             <Form.Control
//               name={name}
//               type={type}
//               id={id}
//               onPaste={onPaste}
//               placeholder={placeholder}
//               // ref={inputRef}
//               disabled={disabled}
//               onChange={onChange}
//               onBlur={onBlur}
//               value={value}
//               accept={accept}
//               autoFocus={autoFocus}
//               // onClick={onClick}
//             />
//           ) : (
//             <Form.Control
//               {...(register || {})}
//               placeholder={placeholder}
//               disabled={disabled}
//               accept={accept}
//               autoFocus={autoFocus}
//               id={id}
//               onPaste={onPaste}
//               type={isPassword && !hidePassword ? 'text' : type}
//             />
//           )}
//           {/* {(buttonLabel || iconClass) && (
//           <InputGroup.Append>
//             {hasButton && (
//               <CustomeButton
//                 disabled={isButtonDisabled}
//                 isLoading={isLoading}
//                 label={buttonLabel}
//                 onClick={onButtonClick}
//                 variant={buttonVariant}
//                 iconClass={iconClass}
//                 type={buttonType}
//               />
//             )}
//             {!hasButton && iconClass && <i className={iconClass} />}
//           </InputGroup.Append>
//         )} */}

//           {prependText && <span className="numbers">{prependText}</span>}
//         </InputGroup>
//         {showError && error && (
//           <Form.Text className="error-text">{error}</Form.Text>
//         )}
//       </Form.Group>
//     </div>
//   );
// };

// export default Input;

import React from 'react';
import FormControl from '@mui/material/FormControl';
import { IconButton, Input, InputLabel, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';


type CustomInput = {
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

};

const CustomInput: React.FC<CustomInput> = ({
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
      


      {/* {prepend && (
        <OutlinedInput
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
        name={name}
        required={required}
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <Visibility />
              </IconButton>
            </InputAdornment>
          }
        />
      )}
      {append && (
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start">
              <IconButton>
                <Visibility />
              </IconButton>
            </InputAdornment>
          }
        />
      )} */}
    </FormControl>
  );
};

export default CustomInput;
