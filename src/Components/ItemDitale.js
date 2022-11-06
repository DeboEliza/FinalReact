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
      <main>
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
                 {
                  <h1 style={{color: unidades === 0 ? 'black' : 'red'}}>
                         {unidades === 0  ? ` Hay ${unidades} unidades`  : `Quieres Agregar Mas? `}  
                   </h1>
                 }
                {unidades === 0 ? (
                     <Contador agregado={agregado} stock={item.stock} initial={1}/> 
                   ) : (
                       <Link to ='/Cart' className="irAlCarritoBoton">Ir al carrito</Link>
                    )}
             </div>   
         </div>
      </main>
   );
};

export default ItemDitale;


