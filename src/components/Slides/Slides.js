import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Key from '../../key.js'

import './Slides.css'

const Slide = () => {
    const [slide, setSlide] = useState([])


    useEffect(() => {

        const response = async () => {
            const list = await api.get(`/discover/movie${Key}`)
            const redonNumber = Math.floor(Math.random() * (list.data.results.length - 1))
            const choose = list.data.results[redonNumber]

            setSlide(choose)
        }

        response()

    }, [])


    return (
        <>
            <div className='backgound'>
                <div className='backgroundRight'>
                    <div className='backgroundLeft'>
                        <span >{slide.title}</span>
                        <div className='slideInfo'>
                            <img src={`https://image.tmdb.org/t/p/original${slide.backdrop_path}`} alt={slide.title} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide