import React from 'react';
import Button from '@mui/material/Button';
import { CustomButtonProps } from '../../interfaces/types';
import { Loader } from '..';

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  type,
  disabled,
  variant,
  size,
  isLoading,
  startIcon,
  endIcon,
  color,
  withStartSvg,
  withEndSvg,
  customClasssName,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant || 'contained'}
      color={color}
      className={customClasssName}
      size={size}
      type={type}
      startIcon={withStartSvg || startIcon}
      endIcon={withEndSvg || endIcon}
      disabled={disabled}>
      {isLoading ? (
        <>
          <Loader  />
          <span className={customClasssName}>Loading...</span>
        </>
      ) : (
        <></>
      )}
      {label}
    </Button>
  );
};

export default CustomButton;
