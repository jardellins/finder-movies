import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import api from '../../services/api'
import Key from '../../key.js'

import Header from '../../components/Header/Header'
import ListSearchs from '../../components/ListSearchs/ListSearchs'
import Footer from '../../components/Footer/Footer'
import Pagination from '../../components/Pagination/Pagination'

import './Style.css'

const Search = () => {
    const query = useQuery()
    const name = query.get("name")

    const [searchList, setSearchList] = useState({})
    const [totalItems, setTotalItems] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }


    useEffect(() => {

        const findout = async () => {
            await api.get(`/search/multi${Key}&query=${name}`).then(response => {
                setSearchList(response.data.results)
                setTotalItems(searchList.length)
                setTotalPages(response.data.total_pages)
            })
        }

        findout()
    }, [])

    const handleNextPage = (numberPage) => {
        const getTv = async () => {
            await api.get(`/search/multi${Key}&query=${name}&page=${numberPage}`).then(response => {
                setSearchList(response.data.results)
                setCurrentPage(numberPage)
                window.scroll(0,0)
            })
        }

        getTv()
    }


    return (
        <>
            <Header />
            <ListSearchs searchList={searchList} name={name} />
            <Pagination totalPages={totalPages} totalItems={totalItems} nextPage={(number) => handleNextPage(number)} currentPage={currentPage} />
            <Footer />
        </>
    )
}

export default Search;