import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import icon from '../../assets/icon-movie.svg'

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import api from '../../services/api'
import Key from '../../key.js'

import './Header.css'

const Header = () => {
    const [genreList, setGenreList] = useState([])

    useEffect(() => {
        async function listGender() {
            await api.get(`/genre/movie/list${Key}`).then(response => {
                setGenreList(response.data.genres)
            })

        }
        listGender()
    }, [])


    return (
        <header>
            <Link to='/' >
                <div className="logo">
                    <img src={icon} alt="logo cabeçalho" />
                    <span>Movies Search</span>
                </div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <div className='dropdown'>
                            <button className='dropButton'>Gênero <ArrowDropDownIcon /></button>
                            {genreList[0] && genreList.map(list => {
                                return (
                                    <div key={list.id} className='dropdownContent'>
                                        <Link to={`/genres?id=${list.id}&genre=${list.name}`} >
                                            {list.name}
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </li>
                    <li>
                        <Link to='/movie'>Filmes</Link>
                    </li>
                    <li>Séries</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;