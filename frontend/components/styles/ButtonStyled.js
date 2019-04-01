import styled from 'styled-components';

export const ButtonStyled = styled.button`
    background: ${props => props.theme.sec};
    color: ${props => props.theme.lightGray};
    padding: 5px 20px;
    text-align: center;
    border: none;
    color: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    font-size: 16px;
    &:focus {
        outline: 0;
    }
`;