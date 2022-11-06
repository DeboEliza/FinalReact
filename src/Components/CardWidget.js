import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import { useContext } from 'react';
import {CartContext} from '../../src/Context/CartContext';

function CardWidget () {
   const {totalDeUnidades} = useContext(CartContext);
        return (
           <div>
              <FontAwesomeIcon className='icono' icon={faCartShopping} /> 
              <span>{totalDeUnidades() || ""} </span>           
           </div>
        );
};

export default CardWidget;


