import React from 'react'

import Header from '../../components/header/Header'
import Slides from '../../components/Slides/Slides'
import Tranding from '../../components/Tranding/Tranding'


import './main.css'

const Main = () => {
    return (
        <>
            <Header />

            <main>
            <Slides />
            <Tranding />
            </main>
        </>
    )
}

export default Main