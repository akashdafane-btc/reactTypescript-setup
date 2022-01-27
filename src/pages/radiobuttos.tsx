import React from 'react';
import { RadioButton } from '../components/index';

const RadioButtons = () => {
  const radioButtonData = [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
    { label: 'other', value: 'other' },
  ];

  return (
    <>
      <RadioButton data={radioButtonData} label='Gender' />
    </>
  );
};

export default RadioButtons;
