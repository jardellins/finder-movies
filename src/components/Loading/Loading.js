import React from 'react'

import loading from '../../assets/loading.gif'
import './Style.css'

const Loading = () => (
    <div className="loading">
        <img src={loading} alt="Carreando.." />
    </div>
)

export default Loading;