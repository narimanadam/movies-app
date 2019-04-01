import React, { Component } from 'react';

const Textarea = (props) => {
    return (
        <div className="form__group">
            {props.label && (<label htmlFor={props.placeholder} className="form__label">{props.label}</label>)}
            <textarea type={props.type} placeholder={props.placeholder} className="form__textarea" />
        </div>
    );
}

export default Textarea;