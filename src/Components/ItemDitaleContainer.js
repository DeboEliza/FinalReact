import React,{useEffect,useState} from "react";
import ItemDitale from "./ItemDitale";
import {products} from '../Mock/ProducMock';
import { useParams } from "react-router-dom";

const ItemDitaleContainer = () =>{
    const [ item, setItem ] = useState({});

    const { id }= useParams ();
    
    useEffect(() => {
        const miProducto = () => {
            return new Promise ((res,rej) => {
                const producto = products.find (
                    (prod)=> prod.id === Number (id)
                );
        
                setTimeout (()=>{
                    res(producto) ;                     
                }, 2000);
            });
        };
        miProducto ()
            .then((res) =>{
               setItem(res);
           })
            .catch((error)=>{
               console.log(error);
            })
    },[id]);

  console.log(item);

  return (
        <div>
         <ItemDitale item={item}/>
         </div>
    );
};

export default ItemDitaleContainer;