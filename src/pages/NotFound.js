import React from 'react'

import notFound from '../assets/404.gif'
import Header from '../components/Header/Header'
import './Style.css'

const NotFound = () => {
    return (
        <>
            <Header />
            <div className='notFound' >
                <img src={notFound} alt='Página não encontrada' />
            </div>
        </>
    )
}

export default NotFound