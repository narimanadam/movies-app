import styled from 'styled-components';

export const FooterStyled = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background: ${props => props.theme.black};
    color: ${props => props.theme.lightGray};
    padding: 15px 0;
    text-align: center;
`;