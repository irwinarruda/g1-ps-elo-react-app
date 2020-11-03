import React from 'react';
import './styles.css';

function Input({label, type, name, value, setValue, error, ...props}) {
    function handleChange (event) {
        setValue(event.target.value)
    }
    return (
        <div>
           <label className="input-label">{label}</label> 
           <input {...props} className="input-input" type={type} name={name} id={name} value={value} onChange={handleChange}/>
        {error? <p className="input-error">{error}</p>: null}
        </div>
    );
}

export default Input;



