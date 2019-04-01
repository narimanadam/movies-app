import React, { Component } from 'react';

const InputField = (props) => {
    return (
        <div className="form__group">
            {props.label && (<label htmlFor={props.placeholder} className="form__label">{props.label}</label>)}
            <input type={props.type} placeholder={props.placeholder} className="form__field" />
        </div>
    );
}

export default InputField;