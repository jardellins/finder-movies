import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import api from '../../services/api'
import Key from '../../key.js'

import Header from '../../components/header/Header'
import ListSearchs from '../../components/listSearchs/listSearchs'
import Footer from '../../components/footer/footer'

import './search.css'

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