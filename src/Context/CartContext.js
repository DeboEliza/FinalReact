import { createContext, useState } from "react";


export const CartContext = createContext()

const Provider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addToCart = (item, cantidad) => {
        const producto = {...item, cantidad};
        if (isInCart (producto.id)) {
            //sumo
        } else {
            setCart([...cart, producto]);
        }
  
    };

    const isInCart =(id) => cart.some ((prod) => prod.id ===id);

    const borrarTodo = () => setCart ([]);

    //borrar un solo producto

    //sumar catidaddes

    // sumar precio total

    console.log (cart);

    return (
        <CartContext.Provider value={{cart, addToCart, borrarTodo}}>
            {children} 
        </CartContext.Provider>
    );
};

export default Provider;