import React, { useState } from 'react'

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './ListComponents.css'

const Tranding = ({ listAll, onMouseOver = () => { }, onMouseOut = () => { }, mouseOver }) => {
    const [scrollX, setScrollX] = useState(0)
    
    function handleLeftArrow() {
        let x = scrollX + Math.round(window.innerWidth / 3)

        if( x > 0) {
            x = 0
        }
        
        setScrollX(x)
    }
    
    function handleRightArrow() {
        let x = scrollX - Math.round(window.innerWidth / 3);
        let listW = listAll.length * 200;
        console.log(x)
        if(window.innerWidth - listW > x)
        {
            x = (window.innerWidth - listW) - 20;
        }

        setScrollX(x);
    }

    return (
        <div className='listRow' >
            <div className='arrowLeft' >
                <NavigateBeforeIcon onClick={handleLeftArrow} />
            </div>

            <div className='rowArea' style={{marginLeft: scrollX}}>
                {listAll.map((list, index) => {

                    return (
                        <div key={index} className='postMovie'>
                            <div className='movieImage'>
                                <img src={`https://image.tmdb.org/t/p/w300${list.poster_path}`} alt={list.title ? list.title : list.name} />
                                <span>{list.title ? list.title : list.name}</span>
                            </div>

                        </div>
                    )

                })}
            </div>

            <div className='arrowRight'>
                <NavigateNextIcon onClick={handleRightArrow} />
            </div>
        </div>


    )
}

export default Tranding;

