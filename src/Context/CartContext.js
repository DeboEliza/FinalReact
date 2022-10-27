import { createContext, useState } from "react";


export const CartContext = createContext()

const Provider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addToCart = (item, cantidad) => {
        const producto = {...item, cantidad};
        if (isInCart (producto.id)) {
            //sumo
            sumarCantidad(producto)
        } else {
            setCart([...cart, producto]);
        }
  
    };

    const sumarCantidad = (productoAgregado) => {
        const carritoActualizado = cart.map ((prodDelCart) =>{
            if (prodDelCart.id === productoAgregado.id) {
                const productoActualizado ={
                    ...prodDelCart,
                    cantidad: prodDelCart.cantidad * productoAgregado.cantidad,
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

    //borrar un solo producto

    const deleteOne = (id) => {
        const prodFiltrados = cart.filter ( (prod) => prod.id !== id)
        setCart(prodFiltrados);
    }

    //sumar catidaddes (for, foreach, for of, reduce)

    // sumar precio total (for, foreach, for of, reduce)

    console.log (cart);

    return (
        <CartContext.Provider value={{cart, addToCart, borrarTodo, deleteOne}}>
            {children} 
        </CartContext.Provider>
    );
};

export default Provider;