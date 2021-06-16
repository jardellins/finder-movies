import React from 'react'
import { Link } from 'react-router-dom'

import './Style.css'

const Slide = (slide) => {

    return (
        <>
            <div className='backgound'>
                <div className='backgroundRight'>
                    <div className='backgroundLeft'>
                        <Link to={`/info/${slide.slide.id}/${slide.slide.media_type}`}>
                            <div className='containerBack'>
                                <span >{slide.slide.title}</span>
                                <div className='slideInfo'>
                                    <img src={`https://image.tmdb.org/t/p/original${slide.slide.backdrop_path}`} alt={slide.title} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide