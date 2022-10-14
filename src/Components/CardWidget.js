import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';

function CardWidget () {
        return (
           <div>
              <FontAwesomeIcon className='icono' icon={faCartShopping} />             
           </div>
        );
};

export default CardWidget;