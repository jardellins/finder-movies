import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import api from '../../services/api'
import Key from '../../key.js'

import Header from '../../components/Header/Header'
import ListSearchs from '../../components/ListSearchs/ListSearchs'
import Footer from '../../components/Footer/Footer'

import './Style.css'

const Search = () => {
    const query = useQuery()
    const name = query.get("name")

    const [searchList, setSearchList] = useState({})

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }


    useEffect(() => {

        const findout = async () => {
            await api.get(`/search/multi${Key}&query=${name}`).then(response => {
                setSearchList(response.data.results)
            })
        }

        findout()
    }, [])

    return (
        <>
            <Header />
            <ListSearchs searchList={searchList} name={name} />
            <Footer />
        </>
    )
}

export default Search;