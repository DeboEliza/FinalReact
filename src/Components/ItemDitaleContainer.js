import React,{useEffect,useState} from "react";
import ItemDitale from "./ItemDitale";
import {products} from '../Mock/ProducMock';


function ItemDitaleContainer ({greeting}){
    const[item,setItem] = useState({})
    
    useEffect(() => {
        const miProducto = () => {
            return new Promise ((res,rej) => {
                const producto = products.find ((prod)=> prod.id===2 );
                 console.log (producto);
                setTimeout (()=>{
                     res(producto) ;                     
                },2000);
            });
        };
        miProducto ()
            .then((res) =>{
               setItem(res);
           })
            .catch((error)=>{
               console.log(error);
            })
    },[]);

  return (
        <div>
         <h1 style={{"color": "yellow", "fontSize":"40px", "paddingleft":"50px"}}>{greeting} </h1>
         <ItemDitale item={item}/>
         </div>
    );
};

export default ItemDitaleContainer;