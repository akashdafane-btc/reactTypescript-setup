import React, {useState} from 'react'
import './App.css';
import Dropdown from './pages/dropdown';
import { Button, Input, Icons  } from './components/index'

function App() {

  return (
    <div className="App">
     <Button 
     label='hi there'
     variant={'secondary'}  
     handleClick={() => alert('hi there')} />
     <Input 
     type={'text'}
     placeholder={'Enter Something'}
     />
     <Dropdown />
     <Icons width='500' height='500'  text='yep...' src='/Freesample.svg'/>
     {/* <input type='text' onChange={(e)=> setData(e.target.value)} /> */}
    </div>
  );
}

export default App;
