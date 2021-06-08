import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../../assets/icon-movie.svg'

import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={icon} alt="logo cabeçalho" />
                <span>Movies Search</span>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>Genero</li>
                    <li>Filmes</li>
                    <li>Séries</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;