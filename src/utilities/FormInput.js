import React from 'react';

const FormInput = props => {
    //props is an array containing objects for every input field or button
    //every object contains type, placeholder, submithandler etc
    return (
        <div>
            <input 
                placeholder = {props.placeholder}
                name = {props.name}
                value = {props.value}
                icon = {props.icon}
                onChange = {props.onChange}
                disabled = {props.disabled}
            />
        </div>
    )
} 

export default FormInput;