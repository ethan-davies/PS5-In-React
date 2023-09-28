import '../css/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faGear,
    faCircleUser,
} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

function NavBar() {
    const time = new Date().toLocaleTimeString()

    return (
        <>
            <div id="navbar">
                <div className="navbar__right">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0,
                            duration: 0.5,
                            delay: 0.1,
                        }}
                    >
                        <a className="page-redirect bold" href="/">
                            Games
                        </a>
                    </motion.h3>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0,
                            duration: 0.5,
                            delay: 0.25,
                        }}
                    >
                        <a className="page-redirect" href="/media">
                            Media
                        </a>
                    </motion.h3>
                </div>

                <div className="navbar__left">
                    <div id="icon-container">
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                bounce: 0,
                                duration: 0.5,
                                delay: 0.1,
                            }}
                            href="/search"
                        >
                            <FontAwesomeIcon
                                className="icon fa-xl"
                                icon={faMagnifyingGlass}
                            ></FontAwesomeIcon>
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                bounce: 0,
                                duration: 0.5,
                                delay: 0.25,
                            }}
                            href="/settings"
                        >
                            <FontAwesomeIcon
                                className="icon fa-xl"
                                icon={faGear}
                            ></FontAwesomeIcon>
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                bounce: 0,
                                duration: 0.5,
                                delay: 0.4,
                            }}
                            href="/profile"
                        >
                            <FontAwesomeIcon
                                className="icon fa-xl"
                                icon={faCircleUser}
                            ></FontAwesomeIcon>
                        </motion.a>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                bounce: 0,
                                duration: 0.5,
                                delay: 0.55,
                            }}
                        >
                            {time}
                        </motion.span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
