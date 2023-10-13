import { useState, useEffect } from 'react'
import '../css/games.css'
import type { Game } from '../data/games'
import { games } from '../data/games'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLockOpen,
    faLock,
    IconDefinition,
    faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { favGame } from '../data/games'
import { motion } from 'framer-motion'

function Games() {
    let svg: IconDefinition
    const [gameName, setGameName] = useState('')
    const [gameDescription, setGameDescription] = useState('')
    const [gameLink, setGameLink] = useState('')
    const [launchButtonText, setLaunchButtonText] = useState('Launch Game')
    const [dots, setDots] = useState(0)
    const [launching, setLaunching] = useState(false)
    const [steamAvailable, setSteamAvailable] = useState(false)

    console.log(launchButtonText)

    if (favGame.locked) {
        svg = faLock
    } else {
        svg = faLockOpen
    }

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    const launchGame = () => {
        if (launching) {
            return // Don't do anything if launching is in progress
        }

        setLaunchButtonText('Launching Game')
        setDots(0)
        setLaunching(true)

        const interval = setInterval(() => {
            setDots((prevDots) => (prevDots % 3) + 1)
        }, 1000)

        setTimeout(() => {
            clearInterval(interval)
            setLaunchButtonText('Launch Game')
            setDots(0)
            setLaunching(false)
        }, 10000) // Increase the duration to 10 seconds
    }

    const setModalDetails = async (
        name: string,
        description: string,
        link: string,
        steam: boolean
    ): Promise<void> => {
        setGameName(name)
        setGameDescription(description)
        setGameLink(link)
        setSteamAvailable(steam) // Set Steam availability state
        toggleModal()
    }

    useEffect(() => {
        if (launching) {
            // Disable the button during the "Launching Game..." animation
            const launchButton = document.getElementById('launch-button')
            if (launchButton) {
                launchButton.classList.add('disabled')
            }
        } else {
            // Re-enable the button when the animation is done
            const launchButton = document.getElementById('launch-button')
            if (launchButton) {
                launchButton.classList.remove('disabled')
            }
        }
    }, [launching])

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <div id="games-container">
                <div id="games">
                    <div className="game__icon">
                        <img src={favGame.image} alt={favGame.name} />
                    </div>
                    {games.map((props: Game, index: number) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring',
                                    bounce: 0,
                                    duration: 0.6,
                                    delay: 0.15 * index,
                                }}
                                viewport={{ once: true }}
                                className="game__item"
                            >
                                <a
                                    onClick={() =>
                                        setModalDetails(
                                            props.name,
                                            props.description,
                                            props.link,
                                            props.steam
                                        )
                                    }
                                >
                                    <img src={props.image} alt={props.name} />
                                </a>
                                {!props.steam && (
                                    <div className="steam-disabled">
                                        Not available on Steam
                                    </div>
                                )}
                            </motion.div>
                        )
                    })}
                </div>
                <div id="favGame-container">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0,
                            duration: 0.5,
                            delay: 0.1,
                        }}
                    >
                        {favGame.name}
                    </motion.span>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0,
                            duration: 0.5,
                            delay: 0.15,
                        }}
                        className="vl"
                    ></motion.div>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0,
                            duration: 0.5,
                            delay: 0.2,
                        }}
                        className="console"
                    >
                        {favGame.console}
                    </motion.span>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0,
                            duration: 0.5,
                            delay: 0.5,
                        }}
                    >
                        <FontAwesomeIcon
                            className="icon fa-sm"
                            icon={svg}
                        ></FontAwesomeIcon>
                    </motion.div>
                </div>
            </div>

            {/* Pop-up */}
            {modal && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 0.5,
                        delay: 0.1,
                    }}
                    className="modal"
                >
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                bounce: 0,
                                duration: 0.5,
                                delay: 0.2,
                            }}
                            className="modal-title"
                        >
                            {gameName}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                bounce: 0,
                                duration: 0.5,
                                delay: 0.35,
                            }}
                            className="modal-paragraph"
                        >
                            {gameDescription}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                bounce: 0,
                                duration: 0.5,
                                delay: 0.6,
                            }}
                        >
                            <FontAwesomeIcon
                                onClick={toggleModal}
                                icon={faXmark}
                                className="fa-lg close-modal"
                            ></FontAwesomeIcon>
                        </motion.div>
                        {steamAvailable && (
                            <motion.a
                                id="launch-button"
                                onClick={launchGame}
                                href={gameLink}
                                className={`launch-button ${
                                    launching ? 'disabled' : ''
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring',
                                    bounce: 0,
                                    duration: 0.5,
                                    delay: 0.6,
                                }}
                            >
                                {launching
                                    ? `Launching Game${'.'.repeat(dots)}`
                                    : 'Launch Game'}
                            </motion.a>
                        )}
                    </div>
                </motion.div>
            )}
        </>
    )
}

export default Games
