import React from 'react';
import { Checkbox } from '../components/index'

const CheckBoxDashboard = () => {
  return (
    <>
    <Checkbox color='default' label='default' checked />
    <Checkbox color='primary' label='primary' checked />
    <Checkbox color='secondary' label='secondary' checked />
    <Checkbox color='error' label='error' checked />
    <Checkbox color='info' label='info' checked />
    <Checkbox color='success' label='success' checked />
    <Checkbox color='warning' label='warning' checked />
    <br></br><br></br>
    <h5>Small Size</h5>
    <Checkbox color='default' label='default' checked size='small' />
    <Checkbox color='primary' label='primary' checked size='small' />
    <Checkbox color='secondary' label='secondary' checked size='small' />
    <Checkbox color='error' label='error' checked size='small' />
    <Checkbox color='info' label='info' checked size='small' />
    <Checkbox color='success' label='success' checked size='small' />
    <Checkbox color='warning' label='warning' checked size='small' />
    </>
  )
};

export default CheckBoxDashboard;
