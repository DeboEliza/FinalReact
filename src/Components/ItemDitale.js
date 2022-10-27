import { useContext, useState } from "react";
import './ItemDitale.css';
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Contador from "./Contador";

const ItemDitale = ({ item }) => {
    const [unidades, setUnidades] = useState(0);

    const {addToCart} = useContext (CartContext);

   const agregado =(numero) => {
      setUnidades(numero);
      addToCart(item,numero)
      
   };

   return (
      <div>
        <img className='imagenItem' src={item.img} alt=""/>
        <div>
            <h2>{item.title}</h2>
               <p className="descripcion">
                  Indumentaria para el hombre y la mujer activos que necesitan estar cómodos
                  y sentirse bien para transcurrir el día a día. Este tipo de diseño permite
                  apreciar en los pequeños detalles la elegancia de un estilo clásico que
                  valora los detalles trendy.
               </p>
            
            {unidades === 0 ? (
               <Contador agregado={agregado} stock={item.stock} initial={1}/> 
            ) : (
               <Link to ='/Cart' className="irAlCarritoBoton">Ir al carrito</Link>
            )}
         </div>
      </div>
   );

};
//recordar armar una condicion con el contador dentro  clase 9
export default ItemDitale;


// agregado={agregado}