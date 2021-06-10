import React from 'react' 
import { Link } from 'react-router-dom'

import Loading from '../../components/loading/Loading'

import './listSearchs.css'

const ListSearchs = ({searchList, name, genre}) => {

    return (
        <>
        {searchList[0] ?
            <>
                <main>
                    {name ? <p>Pesquisa por "{name}"</p> : <p>Filtro pelo gênero "{genre}"</p> }
                    <div className='listSearch'>
                        {searchList.map((list, index) => {
                            let date = (list.release_date ? list.release_date : list.first_air_date)
                            let newDate = []

                            if (date) {
                                newDate = date.split('-')
                            }

                            return (
                                <Link key={index} to={`/info/${list.id}/${list.media_type}`}>

                                <div key={index} className='listFind'>
                                    <div className='infoList'>
                                        <span className='titleListSearch'>
                                            <h3 >{list.title ? list.title : list.name}</h3>
                                            { newDate[0] && `(${newDate[0]})`}
                                        </span>
                                    </div>
                                    <div className='image'>
                                        <img src={`https://image.tmdb.org/t/p/w300${list.poster_path}`} alt={list.title ? list.title : list.name} />
                                    </div>
                                </div>
                                </Link>
                            )
                        })}
                    </div>

                </main>
            </>
            :
            <Loading />
        }
        </>
    )
}

export default ListSearchs;