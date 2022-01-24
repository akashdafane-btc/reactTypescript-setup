import React from 'react';
import Tooltip from '@mui/material/Tooltip';

type TooltipProps = {
  title?: any;
  children?: any;
  id?: string;
};

const CustomTooltip: React.FC<TooltipProps> = ({ title, children, id }) => {
  return (
    <>
      <Tooltip title={title} id={id}>
        {children}
      </Tooltip>
    </>
  );
};

export default CustomTooltip;
