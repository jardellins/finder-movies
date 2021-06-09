import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'

import api from '../../services/api'
import Key from '../../key'
import Header from '../../components/header/Header'
import Loading from '../../components/loading/Loading'

import './info.css'
import Footer from '../../components/footer/footer'

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
            <main className='mainInfo'>
                {getInfo.id ?
                    <>
                        <img src={`https://image.tmdb.org/t/p/original${getInfo.backdrop_path}`} alt={getInfo.title} />
                        <div className='container'>
                            <div className='mediaPoster'>
                                <img src={`https://image.tmdb.org/t/p/w300${getInfo.poster_path}`} alt={getInfo.title} />
                                <div className='overviwe'>
                                    <h1>{getInfo.title}</h1>
                                    <p>{getInfo.overview}</p>
                                </div>
                            </div>
                            <div className='details'>
                                <span>{getInfo.release_date}</span>
                                <span>país de Origem: {getInfo.origin_country}</span>
                                <span>Orçamento: ${getInfo.budget}</span>
                                <span>Arrecadação: ${getInfo.revenue}</span>
                                <span>Duração: {getInfo.runtime} min</span>
                            </div>
                        </div>
                    </>
                    :
                    <Loading />
                }

            </main>
            <Footer />
        </>
    )
}

export default Infor;