import React, { useState } from 'react';
import { CheckboxDropdown } from '../components/index';
import { options } from '../constants/constant';

const CheckboxDropdownMenu = () => {
  const [selectOption, setSelectOption] = useState<string>();

  const handleChange = (selected: any) => {
    setSelectOption(selected);
  };

  return (
    <>
      <CheckboxDropdown
        options={options}
        onChange={handleChange}
        allowSelectAll={true}
        value={selectOption}
      />
    </>
  );
};

export default CheckboxDropdownMenu;
