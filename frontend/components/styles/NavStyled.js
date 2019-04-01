import styled from 'styled-components';

export const NavStyled = styled.nav`
    display: inline-block;
    float: right;
    .nav {
        &__item {
            list-style: none;
            display: inline-block;
        }
        &__link {
            text-decoration: none;
            display: inline-block;
            padding: 0 15px;
            color: ${props => props.theme.main}
        }
    }
`;