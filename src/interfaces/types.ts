import React, { ReactNode } from 'react';
import { ButtonVariant } from 'react-bootstrap/esm/types';
export interface ButtonProps {
  // label?: Function | string;
  // isLoading?: boolean;
  // onClick: () => void;
  // variant?: string;
  // prependIcon?: boolean;
  // iconClass?: string;
  // disabled?: boolean;
  // className?: string,
  label?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: string;
  iconClass?: string;
  prependIcon?: boolean;
}

export type InputProps = {
  type?: string;
  placeholder?: string;
  isPassword?: boolean;
  iconClass?: boolean;
  onButtonClick?: boolean;
  tabindex?: number;
  controlId?: string;
  label?: string;
  isRequired?: boolean;
  hintText?: boolean | string | number;
  isControlled?: boolean;
  name?: string;
  onPaste?: Function | any;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: Function;
  accept?: any;
  id?: string;
  value?: any;
  onBlur?: () => void;
  buttonLabel?: string;
  hasButton?: boolean;
  isButtonDisabled?: boolean;
  isLoading?: boolean;
  buttonVariant?: string;
  buttonType?: string;
  prependText?: string;
  showError?: boolean;
  error?: string;
  autoFocus?: any;
  register?: any;
};

export type Images = {
  src?: string;
  srcSet?: string;
  height?: string;
  width?: string;
  alt?: string;
  onClick?: () => void;
  title?: string;
  className?: string;
  id?: string;
};

export type IconProps = {
  width: string;
  height: string;
  srcSet?: string;
  alt?: string;
  src?: any;
  withText?: boolean;
  text?: string;
};

export type selectDropdown = {
  id?: any;
  labelText?: string;
  onBlur?: any;
  defaultValue?: any;
  placeholder?: string;
  options?: any;
  error?: any;
  disabled?: boolean;
  onChange?: any;
  name?: string;
  isMulti?: boolean;
  closeMenuOnSelect?: boolean;
  isRequired?: boolean;
  inputRef?: any;
  value?: any;
  hideSelectedOptions?:boolean;
};

//  type ModalButton ={
//   isDisabled?: boolean;
//   isLoading?: boolean;
//   label?: string;
//   className?: string;
//   onClick?: () => void;
//   variant?: string;
// }

// export type ModalProps = {
//   children?: ReactNode;
//   title?: string;
//   isModalVisible?: boolean;
//   toggleModal?: () => void;
//   buttons?: ModalButton[];
//   modalClass?: string;
// }

export type DialogTitleProps = {
  id: string;
  children?: React.ReactNode;
  onClose?: () => void;
};

export type CustomModalProps = {
  buttons?: any;
  children?: React.ReactNode;
  title?: string;
};

export type CustomButtonProps = {
  label?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  withStartSvg?: any;
  withEndSvg?: any;
  customClasssName?: any;
  sx?:any;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
};

export type CheckboxProps = {
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  inputProps?: object;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  size?: 'medium' | 'small';
  value?: any;
  inputRef?: any;
  label?: any;
};

export type FullScreenLoaderProps = {
  open?: boolean;
  invisible?: boolean;
  transitionDuration?:
    | number
    | { appear?: number; enter?: number; exit?: number };
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
};

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

export type CustomLoaderProps = {
  classes?: object;
  disableShrink?: boolean;
  size?: number | string;
  sx?: Array<Function | object | boolean> | Function | object;
  thickness?: number;
  value?: number;
  variant?: 'determinate' | 'indeterminate';
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
};
