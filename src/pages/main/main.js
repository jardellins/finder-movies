import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Key from '../../key.js'
import Header from '../../components/header/Header'

const Main = () => {

    const [listAll, setListAll] = useState([])

    useEffect(() => {
        api.get(`/trending/all/week${Key}`).then(responde => {
            setListAll(responde.data.results)
        })
    }, [])

    return (
        <>
        <Header />
        <div>
            
           { listAll.map((list, index) => {
                return (
                    <h1 key={index}>{list.title}</h1>
                )
            })}
        </div>
        </>
    )
}

export default Main