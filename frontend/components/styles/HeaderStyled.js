import styled from 'styled-components';

export const HeaderStyled = styled.div`
    background: ${props => props.theme.white};
    color: ${props => props.theme.black};
    box-shadow: ${props => props.theme.boxShadow};
    height: 50px;
    line-height: 50px;
`;