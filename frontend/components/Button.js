import React from 'react';
import { ButtonStyled } from './styles/ButtonStyled';

const Button = (props) => {
    return (
        <div>
            <ButtonStyled>{props.title}</ButtonStyled>
        </div>
    );
};

export default Button;