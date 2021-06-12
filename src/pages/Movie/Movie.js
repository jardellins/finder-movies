import React, { useEffect, useState } from 'react'

import api from '../../services/api'
import Key from '../../key.js'

import Footer from '../../components/footer/footer'
import Header from '../../components/header/Header'
import ListSearchs from '../../components/lisrSearchs/listSearchs'

import './style.css'

const Movie = () => {
    const [listOfMovies, setListOfMovies] = useState([])
    const [newList, setNewList] = useState([])
    
    useEffect(() => {
        const getMovies = async () => {
            await api.get(`/discover/movie${Key}&sort_by=release_date.desc`).then(responde => {
                setListOfMovies(responde.data.results)
            })
        } 

        getMovies()
    }, [])

    useEffect(() => {
        
        addMedia()

    }, [listOfMovies])

    const addMedia = () => {
        const newData = listOfMovies.map(list => ({
            ...list,
            media_type: 'movie'
        }))

        setNewList(newData)
    }

    return (
        <>
            <Header />
            <ListSearchs searchList={newList} name='Filmes' />
            <Footer />
        </>
    )
}

export default Movie