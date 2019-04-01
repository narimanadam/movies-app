import React from 'react';
import Link from 'next/link';
import { NavStyled } from './styles/NavStyled';

const Nav = () => {
    return (
        <NavStyled>
            <ul className="nav__list">
                <li className="nav__item">
                    <Link href="/">
                        <a className="nav__link">Movies</a>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link href="/create">
                        <a className="nav__link">Create Movie</a>
                    </Link>
                </li>
            </ul>
        </NavStyled>
    );
};

export default Nav;