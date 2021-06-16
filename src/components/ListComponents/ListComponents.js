import React from 'react'
import { Link } from 'react-router-dom';

import './Style.css'

const Tranding = ({ listAll, onMouseOver = () => { }, onMouseOut = () => { }, mouseOver, media_type }) => {
    
    return (
        <div className='listRow' >

            <div className='backLeft'/>

            <div className='rowArea' >
                {listAll.map((list, index) => {
                    return (
                        <Link key={index} to={`/info/${list.id}/${list.media_type ? list.media_type : media_type }`}>
                            <div className='postMovie'>
                                <div className='movieImage'>
                                    <img src={`https://image.tmdb.org/t/p/w300${list.poster_path}`} alt={list.title ? list.title : list.name} />
                                    <span>{list.title ? list.title : list.name}</span>
                                </div>

                            </div>
                        </Link>
                    )

                })}
            </div>
            
            <div className='backRight'/>
            
        </div>


    )
}

export default Tranding;

