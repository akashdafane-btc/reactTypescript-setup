export type ButtonProps = {
  label?: string;
  isLoading?: boolean;
  handleClick: Function;
  variant?: string;
  prependIcon?: boolean;
  iconClass?: string;
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
