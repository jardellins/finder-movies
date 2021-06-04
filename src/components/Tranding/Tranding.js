import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Key from '../../key.js'

import './Tranding.css'

const Tranding = () => {
    const [listAll, setListAll] = useState([])
    const [mouseOver, setMouseOver] = useState(false)

    useEffect(() => {
        api.get(`/trending/all/week${Key}`).then(responde => {
            setListAll(responde.data.results)
        })
    }, [])

    function handleMouseOver() {
        setMouseOver(prevState => !prevState)
    }

    function handleMouseOut() {
        setMouseOver(prevState => !prevState)
    }

    return (
        <div className='rowArea'>
            <div className='rowlist'>

                {listAll.map((list, index) => {
                    return (
                        <div key={index} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='postMovie'>
                            <div className='movieImage'>
                                <img src={`https://image.tmdb.org/t/p/w300${list.poster_path}`} alt={list.title} />
                                {mouseOver && 
                                    <span>Over</span>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Tranding;

