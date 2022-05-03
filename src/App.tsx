import React from 'react';
import './App.css';
import {useState} from "react";



function App() {
    const [buttonColor, setButtonColor] = useState('red');
    const [disabled, setDisabled] = useState(false)
    const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

    const handleButtonState = () => {
        setDisabled(prevState => !prevState)
    }



  return (
    <div >
      <button
          style={{backgroundColor: disabled ? 'gray': buttonColor}}
          disabled={disabled}
          onClick={() => setButtonColor(newButtonColor)}>Change to {newButtonColor}</button>
        <input 
            type={'checkbox'} 
            aria-checked={disabled}
            defaultChecked={disabled}
            id={'disable-button-checkbox'}
            onClick={handleButtonState}/>
        <label htmlFor={'disable-button-checkbox'}>Disable button</label>
    </div>
  );
}

export default App;
