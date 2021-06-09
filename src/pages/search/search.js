import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'


import api from '../../services/api'
import Key from '../../key.js'

import Header from '../../components/header/Header'
import loading from '../../assets/loading.gif'
import './search.css'
import Loading from '../../components/loading/Loading'
import Footer from '../../components/footer/footer'

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
            await api.get(`/search/multi${Key}&query=${query.get("name")}`).then(response => {
                setSearchList(response.data.results)
            })
        }

        findout()
    }, [])

    console.log(searchList)

    return (
        <>
            <Header />
            {searchList[0] ?
                <>
                    <main>
                        <p>Pesquisa por "{name}"</p>
                        <div className='listSearch'>
                            {searchList.map((list, index) => {
                                console.log(list);
                                let date = (list.release_date ? list.release_date : list.first_air_date)
                                let newDate = []

                                if (date) {
                                    newDate = date.split('-')
                                }

                                return (
                                    <div key={index} className='listFind'>
                                        <div className='infoList'>
                                            <span>
                                                <p className='titleListSearch'>{list.title ? list.title : list.name}</p>
                                                {newDate[0]}
                                            </span>
                                        </div>
                                        <img className='image' src={`https://image.tmdb.org/t/p/w300${list.poster_path}`} alt={list.title ? list.title : list.name} />
                                    </div>
                                )
                            })}
                        </div>

                    </main>
                </>
                :
                <Loading />
            }
            <Footer />
        </>
    )
}

export default Search;