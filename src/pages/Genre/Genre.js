import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import api from '../../services/api'
import Key from '../../key.js'

import './Style.css'
import Header from '../../components/Header/Header'
import ListSearchs from '../../components/ListSearchs/ListSearchs'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'

const Genre = () => {
    const query = useQuery()
    const genre = query.get("genre")

    const [searchList, setSearchList] = useState([])
    const [newSearchList, setNewSearchList] = useState([])

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


    return (
        <>
            <Header />
            { searchList[0] ?
                <ListSearchs searchList={newSearchList} genre={genre} />
                :
                <Loading />
            }
            <Footer />
        </>
    )
}

export default Genre