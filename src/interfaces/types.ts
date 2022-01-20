import React, { ReactNode } from 'react';
import { ButtonVariant } from 'react-bootstrap/esm/types';
export interface ButtonProps  {
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
};


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
  onClick?: Function;
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
}

export type CustomModalProps = {
  buttons?: any;
  children?: React.ReactNode;
}

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
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
};