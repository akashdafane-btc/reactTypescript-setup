import React, { useState } from 'react';
import { SelectDropdown } from '../components/index';

const Dropdown = () => {
  const [selectOption, setSelectOption] = useState<string>();

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div>
      <SelectDropdown
        defaultValue={selectOption}
        onChange={setSelectOption}
        options={options}
      />
    </div>
  );
};

export default Dropdown;
