import '../css/games.css'
import type { Game } from '../data/games'
import { games } from '../data/games'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLockOpen,
    faLock,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { favGame } from '../data/games'
import { motion } from 'framer-motion'

function Games() {
    let svg: IconDefinition

    if (favGame.locked) {
        svg = faLock
    } else {
        svg = faLockOpen
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
                                <a href={props.link}>
                                    <img src={props.image} alt={props.name} />
                                </a>
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
        </>
    )
}

export default Games
