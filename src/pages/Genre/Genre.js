import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import api from '../../services/api'
import Key from '../../key.js'

import './Style.css'
import Header from '../../components/Header/Header'
import ListSearchs from '../../components/ListSearchs/ListSearchs'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'
import Pagination from '../../components/Pagination/Pagination'

const Genre = () => {
    const query = useQuery()
    const genre = query.get("genre")
    const [totalItems, setTotalItems] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const [searchList, setSearchList] = useState([])
    const [newSearchList, setNewSearchList] = useState([])

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    useEffect(() => {

        const findout = async () => {
            await api.get(`/discover/movie${Key}&with_genres=${query.get("id")}`).then(response => {
                setSearchList(response.data.results)
                setTotalPages(response.data.total_pages)
                setTotalItems(searchList.length)

                console.log(response.data)
            })
        }

        findout()

    }, [genre])

    useEffect(() => {
        const addMedia = () => {
            const newSearch = searchList && searchList.map(list => ({
                ...list,
                media_type: 'movie'
            }))

            setNewSearchList(newSearch)
        }

        addMedia()

    }, [searchList])

    const handleNextPage = (numberPage) => {
        const getMore = async () => {
            await api.get(`/discover/movie${Key}&with_genres=${query.get("id")}&page=${numberPage}`).then(response => {
                setSearchList(response.data.results)
                setCurrentPage(numberPage)
                window.scroll(0, 0)
            })
        }

        getMore()

    }



    return (
        <>
            <Header />
            {searchList[0] ?
                <>
                    <ListSearchs searchList={newSearchList} genre={genre} />
                    <Pagination totalPages={totalPages} totalItems={totalItems} nextPage={(number) => handleNextPage(number)} currentPage={currentPage} />
                </>
                :
                <Loading />
            }
            <Footer />
        </>
    )
}

export default Genre