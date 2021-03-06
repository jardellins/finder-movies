import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import Key from '../../key.js'

import Header from '../../components/Header/Header'
import Slides from '../../components/Slides/Slides'
import ListComponents from '../../components/ListComponents/ListComponents'

import './Style.css'
import Loading from '../../components/Loading/Loading'
import Footer from '../../components/Footer/Footer'

const Main = () => {
    const [listAll, setListAll] = useState(null)
    const [listDiscover, setListDiscover] = useState(null)
    const [listTvTranding, setListTvTranding] = useState(null)
    const [slide, setSlide] = useState({})
    const [search, setSearch] = useState('')

    const [mouseOver, setMouseOver] = useState(false)

    useEffect(() => {
        api.get(`/trending/all/week${Key}`).then(responde => {
            const items = responde.data.results

            setListAll({
                items,
                title: "Destaques"
            })
        })

    }, [])

    useEffect(() => {
        api.get(`/discover/movie${Key}`).then(responde => {
            const items = responde.data.results

            setListDiscover({
                items,
                media_type: 'movie',
                title: "Novidades"
            })
        })

    }, [])

    useEffect(() => {
        api.get(`/tv/popular${Key}`).then(responde => {
            const items = responde.data.results

            setListTvTranding({
                items,
                media_type: 'tv',
                title: "Séries em Destaques"
            })
        })

    }, [])

    useEffect(() => {

        const response = async () => {
            const list = await api.get(`/discover/movie${Key}`)
            const redonNumber = Math.floor(Math.random() * (list.data.results.length - 1))
            const choose = list.data.results[redonNumber]

            setSlide({...choose, media_type: 'movie'})
        }

        response()

    }, [])

    return (
        <>
            { slide.id ?
                <>
                    <Header />
                    
                    <main>
                        <Slides slide={slide} />
                        
                        <div className='search'>
                                <input id='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite o nome do filme ou série" />
                            <Link to={`/search?name=${search}`} >
                                <button type='button' >Pesquisar</button>
                            </Link>
                        </div>

                        {listAll ?
                            <>
                                <span className='titleList'>{listAll.title}</span>
                                <ListComponents listAll={listAll.items} onMouseOver={() => setMouseOver(prevState => !prevState)} onMouseOut={() => setMouseOver(prevState => !prevState)} mouseOver={mouseOver}  />
                            </>
                            : null
                        }

                        {listDiscover ?
                            <>
                                <span className='titleList'>{listDiscover.title}</span>
                                <ListComponents listAll={listDiscover.items} onMouseOver={() => setMouseOver(prevState => !prevState)} onMouseOut={() => setMouseOver(prevState => !prevState)} mouseOver={mouseOver} media_type={listDiscover.media_type} />
                            </>
                            : null
                        }
                        {listTvTranding ?
                            <>
                                <span className='titleList'>{listTvTranding.title}</span>
                                <ListComponents listAll={listTvTranding.items} onMouseOver={() => setMouseOver(prevState => !prevState)} onMouseOut={() => setMouseOver(prevState => !prevState)} mouseOver={mouseOver} media_type={listTvTranding.media_type} />
                            </>
                            : null
                        }
                    </main>
                </>
                :
                <Loading />
            }
        <Footer />
        </>
    )
}

export default Main