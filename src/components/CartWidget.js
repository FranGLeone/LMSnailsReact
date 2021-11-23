import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function CartWidget(){
    return(
        <>
        <FontAwesomeIcon icon={faShoppingCart} style={{fontSize:"30px"}} />
        </>)
    
}



export default CartWidget;