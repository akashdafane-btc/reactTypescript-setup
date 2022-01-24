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
  Toaster,
  ToolTip,
  Tabs,
  Files,
} from './components/index';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import { VisibilityOff,Visibility } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonDashboard from './pages/buttonPages';
import ModalDashboard from './pages/modalDashboard';
import CheckBoxDashboard from './pages/checkBoxDashboard';
import FullScreenLoader from './components/common/fullScreenLoader';
import {showToast}  from './utility/common';
import { useForm } from 'react-hook-form';
// import { Toaster } from 'react-hot-toast';


function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(!isModalVisible);

  const handleClick = () => {
    setModalVisible(!isModalVisible);
  };

  // const modalFooterButtons = [
  //   {
  //     label: 'cancel',
  //     className: 'cancel-btn',
  //     isLoading: false,
  //     isDisabled: false,
  //     onClick: toggleModal,
  //     variant: 'secondary',
  //   },
  //   {
  //     label: 'delete',
  //     className: 'delete-btn',
  //     isLoading: false,
  //     isDisabled: isLoading,
  //     onClick: onDelete,
  //     variant: 'danger',
  //   },
  // ];


  const handleToast = () => {
    showToast('Hi there')
  }

   const HandleToast = () => {
    return(
      <h1>React js</h1>
    )
  }
  const Botree = () => {
    return(
      <h1>Python</h1>
    )
  }

 const TabsConstant = [
   {
   value:'1',
   label:'React js',
   disabled: false,
   component: <HandleToast />,
   icon: <DeleteIcon/>,
   iconPosition: 'start',
 },
 {
  value:'2',
  label:'Python',
  icon: <DeleteIcon/>,
  iconPosition: 'end',
  component: <Botree />
},
{
  value:'3',
  label:'Java',
  disabled:true,
  component: <HandleToast />
},
{
 value:'4',
 label:'Dajngo',
 component: <Botree />
},

]

const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm({
  mode: 'onChange',
  reValidateMode: 'onChange',
  defaultValues: {
    email:
      localStorage.isChecked === 'true' && localStorage.username
        ? localStorage.username
        : '',
    password: '',
    rememberMe:
      localStorage.isChecked === 'true' && localStorage.username
        ? JSON.parse(localStorage.isChecked)
        : false,
  },
  // resolver: yupResolver(schema),
});


  return (
    <div className="App">

        {/* <ButtonDashboard  /> */}
        <Button onClick={() => handleToast()} label='toast'/>
        <Toaster position={'bottom-right'} />

        <ToolTip title='tooltip'>
        <DeleteIcon/>
        </ToolTip>

    {/* <Tabs data={TabsConstant} /> */}
      
      {/* <Button
        label="toggle"
        variant={'secondary'}
        isLoading
        onClick={() => setModalVisible(!isModalVisible)}
      /> */}
      {/* <Button label="testing" variant="contained" /> */}

      <br></br><br></br>

      <Input
        label="Enter Email"
        placeholder="email"
        type={isModalVisible ? 'text' : 'password'}
        registeredEvents={register('email')}
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
      <Files />
    </div>
  );
}

export default App;
