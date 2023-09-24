import '../css/games.css'
import type { Game } from '../data/games'
import { games } from '../data/games'

function Games() {
    return (
        <>
            
            <div id="games">
            {games.map((props: Game) => {
                return (

                    <div className='game__item'>
                        <img src={props.image} alt={props.name} />
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default Games