import React from 'react'

import './Slides.css'

const Slide = (slide) => {

    return (
        <>
            <div className='backgound'>
                <div className='backgroundRight'>
                    <div className='backgroundLeft'>
                        <span >{slide.slide.title}</span>
                        <div className='slideInfo'>
                            <img src={`https://image.tmdb.org/t/p/original${slide.slide.backdrop_path}`} alt={slide.title} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide