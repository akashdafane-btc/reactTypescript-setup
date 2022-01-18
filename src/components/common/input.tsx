import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { InputProps } from '../../interfaces/types';

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  isPassword,
  iconClass,
  onButtonClick,
  tabindex,
  controlId,
  label,
  isRequired,
  hintText,
  isControlled,
  name,
  onPaste,
  disabled,
  onChange,
  accept,
  id,
  value,
  onBlur,
  buttonLabel,
  hasButton,
  isButtonDisabled,
  isLoading,
  buttonVariant,
  buttonType,
  prependText,
  showError,
  error,
  autoFocus,
  register,
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  const managePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const showPassword = () => {
    if (isPassword) {
      return (
        <i
          className={
            hidePassword ? 'fas fa-eye-slash' : 'fa fa-eye show-icon-in-textbox'
          }
          aria-hidden="true"
          onClick={managePasswordVisibility}
        />
      );
    }
    return null;
  };

  return (
    <div>
      <Form.Group
        className={iconClass && !onButtonClick ? 'with-icon' : ''}
        tabIndex={tabindex}
        controlId={controlId}>
        {label && (
          <Form.Label>
            {label}
            {isRequired && <span className="required"> *</span>}
            {hintText && <span className="input-example">{hintText}</span>}
          </Form.Label>
        )}
        <InputGroup>
          {isControlled ? (
            <Form.Control
              name={name}
              type={type}
              id={id}
              onPaste={onPaste}
              placeholder={placeholder}
              // ref={inputRef}
              disabled={disabled}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              accept={accept}
              autoFocus={autoFocus}
              // onClick={onClick}
            />
          ) : (
            <Form.Control
              {...(register || {})}
              placeholder={placeholder}
              disabled={disabled}
              accept={accept}
              autoFocus={autoFocus}
              id={id}
              onPaste={onPaste}
              type={isPassword && !hidePassword ? 'text' : type}
            />
          )}
          {/* {(buttonLabel || iconClass) && (
          <InputGroup.Append>
            {hasButton && (
              <CustomeButton
                disabled={isButtonDisabled}
                isLoading={isLoading}
                label={buttonLabel}
                onClick={onButtonClick}
                variant={buttonVariant}
                iconClass={iconClass}
                type={buttonType}
              />
            )}
            {!hasButton && iconClass && <i className={iconClass} />}
          </InputGroup.Append>
        )} */}

          {prependText && <span className="numbers">{prependText}</span>}
        </InputGroup>
        {showError && error && (
          <Form.Text className="error-text">{error}</Form.Text>
        )}
      </Form.Group>
    </div>
  );
};

export default Input;
