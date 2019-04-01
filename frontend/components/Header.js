import styled from 'styled-components';

import { HeaderStyled } from './styles/HeaderStyled';
import Nav from './Nav';
import Link from 'next/link';

const Logo = styled.img`
    width: 150px;
    display: inline-block;
    vertical-align: middle;
`;

const Header = () => {
    return (
        <HeaderStyled>
            <div className="container">
                <header>
                    <Link href="/">
                        <a>
                            <Logo src="https://res.cloudinary.com/narimanadam/image/upload/v1553670030/movie-app/logo.png" alt="Logo" />
                        </a>
                    </Link>
                    <Nav />
                </header>
            </div>
        </HeaderStyled>
    )
}

export default Header;