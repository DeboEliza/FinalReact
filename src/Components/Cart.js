import  './Cart.css';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const Cart = () =>{


    const {cart, borrarTodo, deleteOne} = useContext (CartContext) ;

    return (
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
    );


    
};

export default Cart;