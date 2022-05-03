import React, {useState} from 'react';
import './App.css';

export const replacePascalCaseWithSpace = (colorName: string) => {

    return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
    const [buttonColor, setButtonColor] = useState('MediumVioletRed');
    const [disabled, setDisabled] = useState(false)
    const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

    const handleButtonState = () => {
        setDisabled(prevState => !prevState)
    }


    return (
        <div>
            <button
                style={{backgroundColor: disabled ? 'gray' : buttonColor}}
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
