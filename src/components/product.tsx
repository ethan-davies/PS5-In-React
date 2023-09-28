import '../css/product.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons'
import { favGame } from '../data/games'
import { motion } from 'framer-motion'

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
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', bounce: 0, duration: 0.5, delay: 0.2, }}>NBA 2K21</motion.h1>
                <div className="buttons">
                    <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', bounce: 0, duration: 0.5, delay: 0.35, }} className='view-button' onClick={toggleModal}>View Product</motion.button>
                    <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', bounce: 0, duration: 0.5, delay: 0.45, }} className='elipsis-button'><FontAwesomeIcon icon={faEllipsis} className="fa-lg"></FontAwesomeIcon></motion.button>
                </div>
            </div>

            {modal && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', bounce: 0, duration: 0.5, delay: 0.1, }} className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content'>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', bounce: 0, duration: 0.5, delay: 0.2, }} className='modal-title'>{favGame.name}</motion.h2>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', bounce: 0, duration: 0.5, delay: 0.35, }} className='modal-paragraph'>{favGame.description}</motion.p>
                        <FontAwesomeIcon onClick={toggleModal} icon={faXmark} className="fa-lg close-modal"></FontAwesomeIcon>
                    </div>
                </motion.div>
            )}
        </>
    )
}

export default Product