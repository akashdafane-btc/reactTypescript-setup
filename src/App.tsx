import React, { useState } from 'react';
import './App.css';
import Dropdown from './pages/dropdown';
import SendIcon from '@mui/icons-material/Send';
import {
  Button,
  Input,
  Icons,
  Checkbox,
  Modal,
  Table,
  RadioButton,
} from './components/index';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import { VisibilityOff } from '@mui/icons-material';

function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(!isModalVisible);

  const handleClick = () => {
    setModalVisible(!isModalVisible);
  };

  const modalFooterButtons = [
    {
      label: 'cancel',
      className: 'cancel-btn',
      isLoading: false,
      isDisabled: false,
      onClick: toggleModal,
      variant: 'secondary',
    },
    {
      label: 'delete',
      className: 'delete-btn',
      isLoading: false,
      // isDisabled: isLoading,
      // onClick: onDelete,
      variant: 'danger',
    },
  ];

  return (
    <div className="App">
      {/* <Button
        label="hi there"
        variant={'secondary'}
        onClick={() => alert('hi there')}
      />
      <Button
        label="toggle"
        variant={'secondary'}
        isLoading
        onClick={() => setModalVisible(!isModalVisible)}
      /> */}
      <Button label="testing" variant="contained" />

      <Modal>
        <h1>Children</h1>
      </Modal>

      {/* <Table /> */}

      <Checkbox value="a" onClick={() => console.log('click')} />
      <Dropdown />
      <Icons width="500" height="500" text="yep..." src="/Freesample.svg" />
      {/* <input type='text' onChange={(e)=> setData(e.target.value)} /> */}

      <Input
        label="Enter Email"
        placeholder="email"
        type={isModalVisible ? 'text' : 'password'}
        inputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleClick()}>
                {isModalVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <br></br>

      <RadioButton value='male' label='Male' />
      <RadioButton value='female' label='Female' />
      {/* <RadioButton  value='female' radioLabel='Female' /> */}
    </div>
  );
}

export default App;
