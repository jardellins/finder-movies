import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Key from '../../key.js'

import Header from '../../components/header/Header'
import Slides from '../../components/Slides/Slides'
import ListComponents from '../../components/listComponents/ListComponents'


import './main.css'

const Main = () => {
    const [listAll, setListAll] = useState(null)
    const [listDiscover, setListDiscover] = useState(null)
    const [listTvTranding, setListTvTranding] = useState(null)
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
                title: "Novidades"
            })
        })

    }, [])

    useEffect(() => {
        api.get(`/tv/popular${Key}`).then(responde => {
            const items = responde.data.results

            setListTvTranding({
                items,
                title: "Séries em Destaques"
            })
        })

    }, [])

    return (
        <>
            <Header />

            <main>
                <Slides />
                <div className='search'>
                    <input className={() => {}} id='search' type='text' placeholder="Encontre o seu filme/série..." />
                    <button>Procurar</button>
                </div>
                {listAll ?
                    <>
                        <span className='titleList'>{listAll.title}</span>
                        <ListComponents listAll={listAll.items} onMouseOver={() => setMouseOver(prevState => !prevState)} onMouseOut={() => setMouseOver(prevState => !prevState)} mouseOver={mouseOver} />
                    </>
                    : null
                }
                {listDiscover ?
                    <>
                        <span className='titleList'>{listDiscover.title}</span>
                        <ListComponents listAll={listDiscover.items} onMouseOver={() => setMouseOver(prevState => !prevState)} onMouseOut={() => setMouseOver(prevState => !prevState)} mouseOver={mouseOver} />
                    </>
                    : null
                }
                {listTvTranding ?
                    <>
                        <span className='titleList'>{listTvTranding.title}</span>
                        <ListComponents listAll={listTvTranding.items} onMouseOver={() => setMouseOver(prevState => !prevState)} onMouseOut={() => setMouseOver(prevState => !prevState)} mouseOver={mouseOver} />
                    </>
                    : null
                }
            </main>
        </>
    )
}

export default Main