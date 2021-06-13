import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import NumberFormat from 'react-number-format';

import api from '../../services/api'
import Key from '../../key'
import Header from '../../components/header/Header'
import Loading from '../../components/loading/Loading'

import './info.css'
import Footer from '../../components/footer/footer'

const Infor = () => {
    const { params } = useRouteMatch()

    const [getInfo, setGetInfo] = useState({})
    const [getTrailer, setGetTrailer] = useState([])
    const [loaded, setLoaded] = useState(false);

    const [minutes, setMinutes] = useState(0)

    useEffect(() => {
        const handleGetApi = async () => {

            await api.get(`/${params.media}/${params.id}${Key}`).then(responde => {
                setGetInfo(responde.data)
            }
            )
        }

        handleGetApi()
    }, [])

    useEffect(() => {
        const trailer = async () => {
            await api.get(`https://api.themoviedb.org/3/movie/${getInfo.id}/videos${Key}`).then(response => {
                setGetTrailer(response.data.results)
            })
        }

        trailer()

    }, [getInfo])

    const handleMinute = () => {
        if (!getInfo.runtime === false) {
            setMinutes(getInfo.runtime)
            console.log('passou')
        } else {
            if (!getInfo.episode_run_time === false) {
                setMinutes(getInfo.episode_run_time[0])
            }
        }
    }

    useEffect(() => {
        handleMinute()
    }, [getInfo])

    console.log(getInfo)
    console.log(getTrailer)

    return (
        <>
            <Header />
            <main className='mainInfo'>
                {getInfo.id ?
                    <>
                        <div className='imageBack' />
                        <img src={`https://image.tmdb.org/t/p/original${getInfo.backdrop_path}`} alt={getInfo.title} onLoad={() => setLoaded(true)} />
                        <div className='container'>
                            {loaded === false ? null :
                                <div className='mediaPoster'>
                                    <div className='imagesInfo'>
                                        <img id='poster' src={`https://image.tmdb.org/t/p/w300${getInfo.poster_path}`} alt={getInfo.title ? getInfo.title : getInfo.name} />

                                        {getInfo.networks &&

                                            getInfo.networks.map(stream =>
                                                <img key={stream.name} id='logo' src={`https://image.tmdb.org/t/p/w200/${stream.logo_path}`} alt={stream.name} />
                                            )

                                        }

                                    </div>

                                    <div className='overview'>
                                        <h1>{getInfo.title ? getInfo.title : getInfo.name}</h1>
                                        <h2>{getInfo.tagline}</h2>
                                        <h3>Sinopse</h3>
                                        <p>{getInfo.overview}</p>
                                    </div>
                                </div>
                            }
                            <div className='containerDetails'>
                                <div className='details'>
                                    <span>{getInfo.release_date}</span>

                                    <span>
                                        {getInfo.origin_country === true &&
                                            (getInfo.origin_country.length > 1 ? 'Paises de origem: ' : 'País de origem: ')
                                                (getInfo.origin_country.map(country => (
                                                    country + ' '))
                                                )
                                        }
                                    </span>

                                    <span>
                                        {getInfo.production_countries && 'Filmagens: '}
                                        {getInfo.production_countries.map(country => (
                                            country.iso_3166_1 + ' '))
                                        }
                                    </span>

                                    {getInfo.budget > 0 &&
                                        <span>Orçamento:
                                    <NumberFormat value={getInfo.budget} displayType={'text'} thousandSeparator={true} prefix={' $'} />
                                        </span>
                                    }


                                    {getInfo.revenue > 0 &&
                                        <span>Arrecadação:
                                     <NumberFormat value={getInfo.revenue} displayType={'text'} thousandSeparator={true} prefix={' $'} />
                                        </span>
                                    }

                                    {getInfo.number_of_seasons &&
                                        (getInfo.number_of_seasons === 1 ?
                                            <span>{getInfo.number_of_seasons} Temporada</span>
                                            :
                                            <span>{getInfo.number_of_seasons} Temporadas</span>
                                        )
                                    }

                                    {getInfo.number_of_episodes > 1 &&
                                        <span>{getInfo.number_of_episodes} episódios</span>
                                    }


                                    <span>Duração: {minutes} min</span>



                                </div>

                                <div className='watch'>
                                    {getTrailer.length > 0 &&
                                        <>
                                            {/* <a href={`https://www.youtube.com/embed/${getTrailer[0].key}`}>
                                            <button id='playTrailer'>Trailer</button>
                                        </a> */}
                                            <iframe
                                                src={`https://www.youtube.com/embed/${getTrailer[0].key}`}
                                                frameborder="0"
                                                allowfullscreen
                                            ></iframe>
                                        </>
                                    }
                                    {getInfo.homepage &&
                                        <a href={getInfo.homepage} target='_blank'>
                                            <button id='play'>Assita</button>
                                        </a>
                                    }
                                </div>
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