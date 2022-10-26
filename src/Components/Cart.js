import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const Cart = () =>{


    const {cart, borrarTodo} = useContext (CartContext) ;

    return (
        <div>
            {
                cart.map ((prod)=>(
                   
                   <div 
                     key = {prod.id}
                   style={{display: 'flex',justifyContent: 'space-between'  }}>
                      <img src={prod.img} alt={prod.titel} />
                      <div>
                        <h2>{prod.title}</h2>
                        <h3> $ {prod.price}</h3>
                        <h3>Cantidad: {prod.cantidad}</h3>
                        <h3>SubTotal: $ {prod.price * prod.cantidad}</h3>
                      </div>
                      <button>ELIMINAR</button>
                    </div>

                ))
            }
            <h2>TOTAL: $ 0 </h2>
            <button onClick={borrarTodo}>Eliminar todo del carrito</button>
        </div>
    );


    
};

export default Cart;