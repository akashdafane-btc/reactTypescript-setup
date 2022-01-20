import React from 'react';
import { Checkbox } from 'pretty-checkbox-react';
// import 'pretty-checkbox/src/pretty-checkbox.scss';


type CheckboxProps = {
  size?: any;
  color?: any;
  icon?: any;
  checked?: boolean;
  onClick?: any;
  disabled?: boolean;
  label?: string;
  classes?: object;
  defaultChecked?: boolean;
  id?: string;
  inputRef?: any;
  required?: boolean;
  value?: any;
  name?: string;
  dataFor?:any;
  
};

const customCheckbox: React.FC<CheckboxProps> = ({
  size,
  color,
  icon,
  checked,
  onClick,
  disabled,
  label,
  classes,
  defaultChecked,
  id,
  inputRef,
  required,
  value,
  name,
  dataFor,
}) => {
  return (
    <>
      {/* <Checkbox
        // {...label}
        {...label}
        classes={classes}
        size={size}
        color={color || 'primary'}
        icon={icon}
        checked={checked}
        onChange={onChange}
        defaultChecked={defaultChecked}
        id={id}
        value={value}
        inputRef={inputRef}
        required={required}
        disabled={disabled}>
        {label}
      </Checkbox> */}
         <Checkbox
        icon={<i className="fas fa-check" />}
        disabled={disabled}
        onChange={onClick}
        checked={checked}
        ref={inputRef}
        color="success-o"
        shape="curve"
        variant="thick"
        name={name}
        data-tip
        data-for={dataFor}>
        {label}
      </Checkbox>
    </>
  );
};

export default customCheckbox;
