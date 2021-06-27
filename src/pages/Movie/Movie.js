import React, { useEffect, useState } from 'react'

import api from '../../services/api'
import Key from '../../key.js'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ListSearchs from '../../components/ListSearchs/ListSearchs'
import Pagination from '../../components/Pagination/Pagination'

import './Style.css'

const Movie = () => {
    const [listOfMovies, setListOfMovies] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [newList, setNewList] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            await api.get(`/discover/movie${Key}`).then(response => {
                setListOfMovies(response.data.results)
                setTotalItems(listOfMovies.length)
                setTotalPages(response.data.total_pages)
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

    const handleNextPage = (numberPage) => {
        const getMovies = async () => {
            await api.get(`/discover/movie${Key}&page=${numberPage}`).then(response => {
                setListOfMovies(response.data.results)
                setCurrentPage(numberPage)
                window.scroll(0,0)
            })
        }

        getMovies()
    }

    return (
        <>
            <Header />
            <ListSearchs searchList={newList} name='Filmes' />
            <Pagination totalPages={totalPages} totalItems={totalItems} nextPage={(number) => handleNextPage(number)} currentPage={currentPage} />
            <Footer />
        </>
    )
}

export default Movie