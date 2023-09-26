import '../css/games.css'
import type { Game } from '../data/games'
import { games } from '../data/games'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLockOpen, faLock, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { favGame } from '../data/games'

function Games() {

    let svg: IconDefinition;
    
    if(favGame.locked) {
        svg = faLock
    } else {
        svg = faLockOpen
    }

    return (
        <>
            <div id="games-container">
                <div id="games">
                    <div className='game__icon'>
                        <img src={favGame.image} alt={favGame.name} />
                    </div>
                {games.map((props: Game) => {
                    return (

                        <div className='game__item'>
                            <a href={props.link}><img src={props.image} alt={props.name} /></a>
                        </div>
                    )
                })}
            </div>
            <div id="favGame-container">
                <span>{favGame.name}</span><div className='vl'></div><span className='console'>{favGame.console}</span>
                <FontAwesomeIcon className="icon fa-sm" icon={svg}></FontAwesomeIcon>
            </div>
            </div>
        </>
    )
}

export default Games