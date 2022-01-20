import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
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
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant || 'contained'}
      color={color}
      size={size}
      type={type}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}>
      {isLoading ? (
        <>
          <Loader />
          <span>Loading...</span>
        </>
      ) : (
        <></>
      )}
      {label}
    </Button>
  );
};

export default CustomButton;
