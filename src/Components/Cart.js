import  './Cart.css';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import {Link,} from 'react-router-dom';

const Cart = () =>{


    const {cart, borrarTodo, deleteOne} = useContext (CartContext) ;
     
     if (cart.length === 0){
       return (
        <Link to ='/' className="irAlHomeBoton"> No has elegido ningun Item!! Presiona aqui para Ir al Home</Link>
            
        )   
      }

    return (
      <main>
        <div>
            {
                cart.map ((prod)=>(
                   
                   <div 
                     key = {prod.id}
                   style={{display: 'flex',justifyContent: 'space-between'  }}>
                      <img className="imagenEnCarrito" src={prod.img} alt={prod.titel} />
                      <div>
                        <h2>{prod.title}</h2>
                        <h3> $ {prod.price}</h3>
                        <h3>Cantidad: {prod.cantidad}</h3>
                        <h3>SubTotal: $ {prod.price * prod.cantidad}</h3>
                      </div>
                      <button onClick={() => deleteOne(prod.id)} className="botonBorrarUno">ELIMINAR</button>
                    </div>
                ))
            }
            <h2>TOTAL: $ 0 </h2>
            <button onClick={borrarTodo} className="botonEliminarTodo">Eliminar todo del carrito</button>
        </div>
      </main>
    );


    
};

export default Cart;