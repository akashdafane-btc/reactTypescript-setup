import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from './button';
import Loader from './loader';
import { FullScreenLoaderProps } from '../../interfaces/types';


const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({
  open,
  invisible,
  transitionDuration,
  color,
  // sx,
}) => {
  const [opens, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!opens);
  };
  return (
    <div>
      <Button onClick={handleToggle}>Show backdrop</Button>
      <Backdrop
        // sx={sx}
        open={opens}
        transitionDuration={transitionDuration}
        invisible={invisible}
        onClick={handleClose}>
        <Loader color={color} />
      </Backdrop>
    </div>
  );
};

export default FullScreenLoader;
