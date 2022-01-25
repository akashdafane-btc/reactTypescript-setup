import React from 'react';
import {Modal} from '../components/index'

const ModalDashboard = () => {

  const handeleClick = () =>{
    console.log('clicked')
  }

  const modalFooterButtons = [
    {
      label: 'save',
      className: 'cancel-btn',
      isLoading: false,
      isDisabled: false,
      onClick: handeleClick,
      color: 'primary',
    },
    {
      label: 'cancel',
      className: 'cancel-btn',
      isLoading: false,
      isDisabled: false,
      onClick: handeleClick,
      color: 'error',
    },
  ]
  return (
    <>
    {/* this is popUp modal */}

    {/* <Modal buttons={modalFooterButtons} title='Header Title' >
      <h1>This is custom modal</h1>
    </Modal> */}


{/* this is Normal modal */}
    <Modal title='Sunraise'>
      <h1>This is Dummy modal</h1>
    </Modal>
    </>
  )
};

export default ModalDashboard;
