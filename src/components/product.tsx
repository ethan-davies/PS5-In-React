import '../css/product.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons'
import { favGame } from '../data/games'

function Product(){
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        <>
            <div id="product-container">
                <h1>NBA 2K21</h1>
                <div className="buttons">
                    <button className='view-button' onClick={toggleModal}>View Product</button>
                    <button className='elipsis-button'><FontAwesomeIcon icon={faEllipsis} className="fa-lg"></FontAwesomeIcon></button>
                </div>
            </div>

            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content'>
                        <h2 className='modal-title'>{favGame.name}</h2>
                        <p className='modal-paragraph'>{favGame.description}</p>
                        <FontAwesomeIcon onClick={toggleModal} icon={faXmark} className="fa-lg close-modal"></FontAwesomeIcon>
                    </div>
                </div>
            )}
        </>
    )
}

export default Product