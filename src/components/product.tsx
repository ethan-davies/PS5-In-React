import '../css/product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

function Product(){
    return (
        <>
            <div id="product-container">
                <h1>NBA 2K21</h1>
                <div className="buttons">
                    <button className='view-button'><a href="/">View Product</a></button>
                    <button className='elipsis-button'><FontAwesomeIcon icon={faEllipsis} className="fa-lg"></FontAwesomeIcon></button>
                </div>
            </div>
        </>
    )
}

export default Product