import React from 'react';

function Input({label, type, name, value, setValue, error}) {
    function handleChange (event) {
        setValue(event.target.value)
    }
    return (
        <div>
           <label>{label}</label> 
           <input type={type} name={name} id={name} value={value} onChange={handleChange}/>
        </div>
    );
}

export default Input;



