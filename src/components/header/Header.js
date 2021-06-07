import React from 'react'
import icon from '../../assets/icon-movie.svg'

import './Header.css'

const Header = () => {
    return (
        <header>
            <span>Movies Search</span>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Genero</li>
                    <li>Ano</li>
                </ul>
            </nav>
            <img src={icon} alt="logo cabeçalho" />
        </header>
    )
}

export default Header;