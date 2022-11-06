import { createContext, useState } from "react";


export const CartContext = createContext()

const Provider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addToCart = (item, cantidad) => {
        const producto = {...item, cantidad};

        if (isInCart (producto.id)) {

            sumarCantidad(producto)
        } else {
            setCart([...cart, producto]);
        }
  
    };

    const sumarCantidad = (productoAgregado) => {
        const carritoActualizado = cart.map ((prodDelCart) =>{
            if (prodDelCart.id === productoAgregado.id) {
                const productoActualizado ={
                    ...prodDelCart,cantidad: prodDelCart.cantidad * productoAgregado.cantidad,
                };
                return productoActualizado;
            } else{
                return prodDelCart;
            }
        } );
            
        setCart(carritoActualizado);
    }

    const isInCart =(id) => cart.some ((prod) => prod.id ===id);

    const borrarTodo = () => setCart ([]);

    const deleteOne = (id) => {
        const prodFiltrados = cart.filter ( (prod) => prod.id !== id)
        setCart(prodFiltrados);
    };


      const totalDeUnidades = () => {
        
         let contador = 0
         const cartDos = [...cart]
        cartDos.forEach((prod)=>{
          contador = contador + prod.cantidad 
     })
        
        return contador;  
    }

   

    
    return (
        <CartContext.Provider value={{cart,totalDeUnidades , addToCart, borrarTodo, deleteOne}}>
            {children} 
        </CartContext.Provider>
    );
};

export default Provider;