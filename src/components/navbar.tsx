import '../css/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faGear, faCircleUser } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  const time = new Date().toLocaleTimeString();

  return (
    <>
      <div id="navbar">
        <div className='navbar__right'>
            <h3><a className='page-redirect bold' href="/">Games</a></h3>
            <h3><a className='page-redirect' href="/media">Media</a></h3>
        </div>

        <div className='navbar__left'>
            <div id="icon-container">
                <a href="/search"><FontAwesomeIcon className="icon fa-xl" icon={faMagnifyingGlass}></FontAwesomeIcon></a>
                <a href="/settings"><FontAwesomeIcon className="icon fa-xl" icon={faGear}></FontAwesomeIcon></a>
                <a href="/profile"><FontAwesomeIcon className="icon fa-xl" icon= {faCircleUser}></FontAwesomeIcon></a>
                <span>{time}</span>
            </div>
        </div>

      </div>
    </>
  )
}

export default NavBar
