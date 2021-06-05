import React from 'react'


import './ListComponents.css'

const Tranding = ({ listAll, onMouseOver = () => { }, onMouseOut = () => { }, mouseOver }) => {
    let yearRelease = 0

    return (
        <div className='rowArea'>
            { listAll.map((list, index) => {

                if(list.release_date){
                    let dateArray = list.release_date.split("-")
                    yearRelease = dateArray[0]
                }else{
                    let dateArray = list.first_air_date.split("-")
                    yearRelease = dateArray[0]
                }

                return (
                    <div key={index} className='postMovie'>
                        <div className='movieImage'>
                            <img src={`https://image.tmdb.org/t/p/w300${list.poster_path}`} alt={list.title ? list.title : list.name} />
                            <span>{list.title ? list.title : list.name}</span>
                            <p>{yearRelease}</p>
                        </div>

                    </div>
                )

            })}
        </div>
    )
}

export default Tranding;

