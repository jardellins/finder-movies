import React, { useEffect, useState } from 'react' 
import { useLocation } from 'react-router'

import api from '../../services/api'
import Key from '../../key.js'

import './genre.css'
import Header from '../../components/header/Header'
import ListSearchs from '../../components/lisrSearchs/listSearchs'
import Footer from '../../components/footer/footer'

const Genre = () => {
    const query = useQuery()
    const genre = query.get("genre")

    const [searchList, setSearchList] = useState({})

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    useEffect(() => {

        const findout = async () => {
            await api.get(`/discover/movie${Key}&with_genres=${query.get("id")}`).then(response => {
                setSearchList(response.data.results)
            })
        }

        findout()
    }, [genre])

    return (
        <>
            <Header />
            <ListSearchs searchList={searchList} genre={genre} />
            <Footer />
        </>
    )
}

export default Genre