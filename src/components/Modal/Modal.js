import React from 'react'
import ReactPlayer from 'react-player'
import CloseIcon from '@material-ui/icons/Close';

import './Style.css'

const Modal = ({ url, onClose = () => { } }) => {
    const id = 'closeModal'

    const handleCloseModal = (event) => {
        if (event.target.id === id) {
            onClose()
        }
    }

    return (
        <>
            <div id='closeModal' className='modalContainer' onClick={handleCloseModal}>

                <div className='modal'>

                    <ReactPlayer
                        className='react-player'
                        url={url}
                        width='100%'
                        height='100%'
                        controls={true}
                    />

                </div>

                <CloseIcon onClick={onClose}/>
            </div>
        </>
    )
}

export default Modal;