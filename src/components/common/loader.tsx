import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { CustomLoaderProps } from '../../interfaces/types';

const Loader: React.FC<CustomLoaderProps> = ({
  classes,
  disableShrink,
  size,
  sx,
  thickness,
  value,
  variant,
  color,
}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress
        classes={classes}
        disableShrink={disableShrink}
        size={size}
        thickness={thickness}
        value={value}
        variant={variant}
        color={color}
      />
    </Box>
  );
};

export default Loader;
