import React from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Input, Button,RadioButton } from '../components/index';
import DeleteIcon from '@mui/icons-material/Delete';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../schema/login';



const FormsDashboard = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    // resolver: yupResolver(schema),
  });

  const radioButtonData = [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
    { label: 'other', value: 'other' },
  ];

  const handleIcon = (position: 'end' | 'start') => {
    return (
      <>
        <InputAdornment position={position}>
          <IconButton aria-label="toggle password visibility">
            <DeleteIcon />
          </IconButton>
        </InputAdornment>
      </>
    );
  };

  const onSubmit = (data: any) => {
    console.log('444',data);
    const { email, password } = data;
  };

  return (
    <>
      <form>
        <Input
          placeholder="Enter Email Here..."
          label="Email"
          variant="outlined"
          registeredEvents={register('email')}
          name="email"
          type="email"
          error={errors.email?.message}
          showError={true}
          required
        />
        <br></br>
        <Input
          placeholder="Enter Password Here..."
          label="Password"
          variant="outlined"
          registeredEvents={register('password')}
          name="password"
          type="password"
          error={errors.password?.message}
          showError={true}
          inputProps={{ endAdornment: handleIcon('end') }}
          required
        />
        <RadioButton data={radioButtonData} label='gender'  />
        <Button type="button" label="submit" onClick={handleSubmit(onSubmit)} />
      </form>
    </>
  );
};

export default FormsDashboard;
