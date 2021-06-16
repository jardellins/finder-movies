import React, { useEffect, useState } from 'react'

import api from '../../services/api'
import Key from '../../key.js'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ListSearchs from '../../components/ListSearchs/ListSearchs'

import './Style.css'

const Movie = () => {
    const [listOfMovies, setListOfMovies] = useState([])
    const [newList, setNewList] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            await api.get(`/discover/movie${Key}`).then(responde => {
                setListOfMovies(responde.data.results)
            })
        } 

        getMovies()
    }, [])

    useEffect(() => {
        const addMedia = () => {
            const newData = listOfMovies.map(list => ({
                ...list,
                media_type: 'movie'
            }))
    
            setNewList(newData)
        }
        
        addMedia()

    }, [listOfMovies])

    return (
        <>
            <Header />
            <ListSearchs searchList={newList} name='Filmes' />
            <Footer />
        </>
    )
}

export default Movie