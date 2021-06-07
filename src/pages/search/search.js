import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'


import api from '../../services/api'
import Key from '../../key.js'

import Header from '../../components/header/Header'
import loading from '../../assets/loading.gif'
import './search.css'

const Search = () => {
    const query = useQuery()
    const name = query.get("name")

    const [searchList, setSearchList] = useState({})
    // const [getDate, setGetDate] = useState([])

    // let releaseYear = getDate[0] || null

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    // function handleGetYear(date) {
    //     const newDate = date.split('-')
    //     setGetDate(newDate)
    // }

    useEffect(() => {

        const findout = async () => {
            await api.get(`/search/movie${Key}&query=${query.get("name")}`).then(response => {
                setSearchList(response.data.results)
            })
        }

        findout()
    }, [])

    // console.log(getDate)

    return (
        <>
            <Header />
            {searchList[0] ?
                <>
                    <main>
                        <p>Pesquisa por "{name}"</p>
                        <div className='listSearch'>
                            {searchList.map((list, index) => {
                                let date = list.release_date
                                let newDate = date.split('-')

                                return (
                                    <div key={index} className='listFind'>
                                        <div className='infoList'>
                                            <span>
                                                <h1>{list.title}</h1>
                                                {newDate[0]}
                                            </span>
                                            <img src={`https://image.tmdb.org/t/p/w300${list.poster_path}`} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </main>
                </>
                :
                <div className='loading'>
                    <img src={loading} alt='Não encontrado' />
                </div>

            }
        </>
    )
}

export default Search;