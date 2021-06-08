import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'

import api from '../../services/api'
import Key from '../../key'
import Header from '../../components/header/Header'
import Loading from '../../components/loading/Loading'

const Infor = () => {
    const { params } = useRouteMatch()

    const [getInfo, setGetInfo] = useState({})

    useEffect(() => {
        const handleGetApi = async () => {

            await api.get(`/${params.media}/${params.id}${Key}`).then(responde => {
                setGetInfo(responde.data)
            }
            )
        }

        handleGetApi()

    }, [])

    return (
        <>
            <Header />
            { getInfo.id ?
                <div className='mainInfo'>
                    <div className='mediaPoster'>
                        <img src={`https://image.tmdb.org/t/p/w300${getInfo.poster_path}`} alt={getInfo.title} />
                        <span>{getInfo.release_date}</span>
                    </div>
                    <h1>{getInfo.title}</h1>
                    <p>{getInfo.overview}</p>
                    <img src={`https://image.tmdb.org/t/p/original${getInfo.backdrop_path}`} alt={getInfo.title} />
                </div>
                : 
                <Loading />
            }

        </>
    )
}

export default Infor;