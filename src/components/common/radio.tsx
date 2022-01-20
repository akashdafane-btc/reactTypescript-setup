// import * as React from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import { StylesConfig } from 'react-select';

// type RadioButtonProps = {
//   label?: string;
//   value?: string;
//   radioLabel?: any;
//   id?: string;
// };

// const CustomRadioButton: React.FC<RadioButtonProps> = ({
//   label,
//   value,
//   radioLabel,
//   id,
// }) => {
//   return (
//     <FormControl>
//       <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
//       <RadioGroup
//         >
//         <FormControlLabel
//           control={<Radio color='secondary'/>}
//           value={value} 
//           id={id}
//           label={radioLabel}
//         />
//       </RadioGroup>
//     </FormControl>
//   );
// };

// export default CustomRadioButton;


import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

type RadioButtonProps = {
  label?: any;
  value?: string;
  radioLabel?: any;
  id?: string;
};

const CustomRadioButton: React.FC<RadioButtonProps> = ({value, label})  => {
  return (
    <>
    {/* <FormControl> */}
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value={value} control={<Radio />} label={label} />
        {/* <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
      </RadioGroup>
    {/* </FormControl> */}
    </>
  );
}

export default CustomRadioButton