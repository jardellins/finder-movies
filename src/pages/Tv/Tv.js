import React, { useEffect, useState } from 'react'

import api from '../../services/api'
import Key from '../../key.js'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ListSearchs from '../../components/ListSearchs/ListSearchs'
import Pagination from '../../components/Pagination/Pagination'

import './Style.css'

const Movie = () => {
    const [listOfTv, setListOfTv] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [newList, setNewList] = useState([])
    
    useEffect(() => {
        const getMovies = async () => {
            await api.get(`/discover/tv${Key}`).then(response => {
                setListOfTv(response.data.results)
                setTotalItems(listOfTv.length)
                setTotalPages(response.data.total_pages)
            })
        } 

        getMovies()
    }, [])

    useEffect(() => {
        const addMedia = () => {
            const newData = listOfTv.map(list => ({
                ...list,
                media_type: 'tv'
            }))
    
            setNewList(newData)
        }
        
        addMedia()

    }, [listOfTv])

    const handleNextPage = (numberPage) => {
        const getTv = async () => {
            await api.get(`/discover/tv${Key}&page=${numberPage}`).then(response => {
                setListOfTv(response.data.results)
                setCurrentPage(numberPage)
                window.scroll(0,0)
            })
        }

        getTv()
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