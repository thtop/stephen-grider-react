import React from 'react';
import './App.css';

const App = () => {

    const buttonText = { text: 'Enter' };
    const labelText = 'Enter name:';

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText} 
            </label>
            <input id="name" type="text" />
            <button>{buttonText.text}</button>
        </div>
    )
}

export default App;